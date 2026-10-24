#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""new_deck.py — 產生一份新的互動複習簡報骨架。

用法範例：
  python scripts/new_deck.py --out 複習網站七 \
      --title "國中數學 七上 全冊複習" \
      --eyebrow "108 課綱國中數學 · 第 1 冊（七上）" \
      --cover-title "七上全冊複習" \
      --sub "整數的運算 · 分數的運算 · 一元一次方程式" \
      --home "七上複習" \
      --chapters "整數的運算::1-1 負數與數線,1-2 整數的加減" \
                 "分數的運算::2-1 因數與倍數,2-2 最大公因數"

每個 --chapters 項目格式： 章名:色碼:節1,節2,節3
（色碼留空會依章序自動套用內建配色）
"""
import argparse
import json
from html import escape
import re
import datetime
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
ASSETS = os.path.join(ROOT, 'assets')

# 章色順序（與參考實作一致，最多 6 章不重複）
PALETTE = ['#2563eb', '#7c3aed', '#059669', '#d97706', '#e11d48', '#0891b2']

CH_TEMPLATE = '''/* ============ 第 %(ch)d 章　%(title)s ============
   節次：%(seclist)s
   對應課綱代碼：（請填）
   課綱邊界：（請填「本章刻意不放」的內容，避免超綱）
   ============================================================ */
window.DECK = window.DECK || [];
(function () {
  const C = '%(color)s';
  const RED = '#e11d48', GRN = '#059669', BLU = '#2563eb', VIO = '#7c3aed', AMB = '#d97706';

  // 標準 SVG 包裝：一定要用這個，圖才會自適應欄寬
  function svg(vb, inner) {
    return `<div style="width:100%%;text-align:center"><svg viewBox="${vb}" style="max-width:100%%">${inner}</svg></div>`;
  }

  // 常用小工具：SVG 文字 / 圓角方塊
  const TX = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" ${o.anchor ? `text-anchor="${o.anchor}"` : ''} font-size="${o.fs || 15}" font-weight="${o.fw || 800}" fill="${o.c || '#172033'}">${s}</text>`;
  const BOX = (x, y, w, h, o = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 12}" fill="${o.fill || '#fff'}" stroke="${o.stroke || '#dce3ee'}" stroke-width="${o.sw || 1.8}"/>`;

  window.DECK.push({
    ch: %(ch)d,
    title: '%(title)s',
    color: C,
    sections: %(sections)s,
    slides: [

      %(slides)s
    ]
  });
})();
'''

SLIDE_STATIC = '''{
        sec: '%(sec)s', secName: '%(secname)s',
        title: '請填：這一頁的單一重點（一句話，看得懂就記得住）',
        points: [
          '重點一（≤45 字，可用 <b>粗體</b>、<span class="k">關鍵詞</span>、行內數學 \\\\(a+b\\\\)）。',
          '重點二。',
          '重點三。'
        ],
        formula: { label: '公式標籤', tex: 'a^2+b^2=c^2' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 280', TX(220, 140, '請畫圖', { fs: 18, c: C, anchor: 'middle' }));
        },
        caption: '圖下方一行說明。',
        example: {
          q: '請填題目。',
          steps: ['第一步。', '第二步。'],
          ans: '答案'
        }
      }'''

SLIDE_SLIDER = '''{
        sec: '%(sec)s', secName: '%(secname)s',
        title: '請填：這一頁的單一重點（互動頁）',
        points: [
          '重點一。',
          '重點二。',
          '拖滑桿看○○怎麼變。'
        ],
        formula: { label: '公式標籤', tex: 'y=ax' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%%"><div id="fig"></div>
            <div class="ictrl"><label>參數 a ＝ <span class="ival" id="av">2</span></label>
            <input type="range" id="as" min="1" max="6" step="1" value="2"></div></div>`;
          const draw = () => {
            const a = +h.querySelector('#as').value;
            h.querySelector('#av').textContent = a;
            let s = TX(220, 40, `目前 a = ${a}`, { fs: 18, c: C, anchor: 'middle' });
            s += BOX(80, 70, 40 * a, 90, { fill: 'rgba(37,99,235,.12)', stroke: C });
            h.querySelector('#fig').innerHTML = svg('0 0 440 280', s);
          };
          h.querySelector('#as').oninput = draw; draw();
        },
        caption: '互動頁的圖下方說明。',
        example: {
          q: '請填題目。',
          steps: ['第一步。', '第二步。'],
          ans: '答案'
        }
      }'''


def parse_chapter(spec, idx):
    parts = spec.split(':')
    if len(parts) < 3:
        sys.exit('--chapters 格式錯誤：%s\n  應為  章名:色碼:節1,節2（色碼可留空）' % spec)
    title, color, secs = parts[0].strip(), parts[1].strip(), parts[2]
    if not color.startswith('#'):
        color = PALETTE[idx % len(PALETTE)]
    sections = [s.strip() for s in secs.split(',') if s.strip()]
    if not sections:
        sys.exit('--chapters「%s」沒有列出任何節次' % title)
    return title, color, sections


def main():
    # Windows 主控台預設可能是 cp950，直接 print 中文/emoji 會炸；強制走 UTF-8
    for stream in (sys.stdout, sys.stderr):
        try:
            stream.reconfigure(encoding='utf-8')
        except Exception:
            pass

    p = argparse.ArgumentParser(description='產生互動複習簡報骨架')
    p.add_argument('--mode', choices=['review', 'inquiry'], default='review', help='複習或課堂探究模式')
    p.add_argument('--lesson', help='探究模式：使用既有完整課程 JS（例如 examples/juice-lesson.js）')
    p.add_argument('--force', action='store_true', help='明確允許覆寫輸出檔案')
    p.add_argument('--out', required=True, help='輸出資料夾')
    p.add_argument('--title', required=True, help='瀏覽器分頁標題')
    p.add_argument('--eyebrow', default='', help='封面上方小字')
    p.add_argument('--cover-title', default='', help='封面大標')
    p.add_argument('--sub', default='', help='封面副標（各章以 · 分隔）')
    p.add_argument('--home', default='複習', help='左上角回封面按鈕文字')
    p.add_argument('--description', default='', help='meta description')
    p.add_argument('--chapters', nargs='+', required=True,
                   help='章名:色碼:節1,節2 （可給多個）')
    p.add_argument('--slides-per-section', type=int, default=2,
                   help='每節先產生幾張骨架（預設 2，靜態／互動交替）')
    a = p.parse_args()

    out = os.path.abspath(a.out)
    if os.path.exists(os.path.join(out, 'index.html')) and not a.force:
        p.error('輸出已有 index.html；請另選資料夾，或明確加上 --force')
    if a.lesson and a.mode != 'inquiry':
        p.error('--lesson 只能與 --mode inquiry 一起使用')
    if a.lesson and len(a.chapters) != 1:
        p.error('--lesson 請搭配一個 --chapters 項目；課程可在 JS 內自行定義多章')
    lesson_source = None
    if a.lesson:
        with open(a.lesson, encoding='utf-8') as fh:
            lesson_source = fh.read()
    os.makedirs(out, exist_ok=True)
    for f in ('engine.js', 'style.css', 'svg.js'):
        shutil.copy(os.path.join(ASSETS, f), os.path.join(out, f))

    if a.mode == 'inquiry':
        for f in ('inquiry.js', 'inquiry-model.js', 'inquiry.css'):
            shutil.copy(os.path.join(ASSETS, f), os.path.join(out, f))
    version = datetime.datetime.now().strftime('%Y%m%d%H%M%S')
    chapters = [parse_chapter(c, i) for i, c in enumerate(a.chapters)]

    for i, (title, color, sections) in enumerate(chapters, start=1):
        slides = []
        for sec in sections:
            code = sec.split()[0]                       # 「1-1 負數與數線」→「1-1」
            name = sec[len(code):].strip() or code
            for k in range(a.slides_per_section):
                tpl = SLIDE_SLIDER if k % 2 == 1 else SLIDE_STATIC
                slides.append(tpl % {'sec': code, 'secname': name})
        sections_js = '[' + ', '.join("'%s'" % s for s in sections) + ']'
        src = CH_TEMPLATE % {
            'ch': i, 'title': title, 'color': color,
            'sections': sections_js,
            'seclist': '、'.join(sections),
            'slides': ',\n\n      '.join(slides),
        }
        if a.mode == 'inquiry':
            chapter = {'ch': i, 'title': title, 'color': color, 'sections': sections, 'slides': []}
            for k, sec in enumerate(sections):
                code = sec.split()[0]
                phases = [
                    ('question', '你會如何判斷？', '請以教材中的真實情境提出問題，記下初步猜想與理由。'),
                    ('task', '你會怎樣設計實驗？', '確定固定量與變數，操作實體或數位教具，把觀察寫下來。'),
                    ('task', '哪些數據值得記錄？', '整理測量、計算與觀察，指出能支持或推翻猜想的證據。'),
                    ('argument', '你的證據能支持主張嗎？', '亮主張、擺證據、說道理、破迷思。'),
                    ('task', '換一個情境，仍然成立嗎？', '以新的生活任務檢查規律，記錄解法與反思。')]
                for phase, (kind, page_title, prompt) in enumerate(phases):
                    slide = {'id': 'ch%d-s%d-p%d' % (i,k+1,phase), 'kind': kind, 'phase': phase,
                             'sec': code, 'secName': sec[len(code):].strip() or code,
                             'title': page_title, 'prompt': prompt,
                             'theme': ['citrus','ocean','teal','violet','coral'][phase],
                             'worksheet': sec}
                    if kind == 'question':
                        slide['choices'] = ['我同意', '我不同意', '需要更多證據']
                    chapter['slides'].append(slide)
            config = {'mode': 'inquiry', 'id': os.path.basename(out), 'version': 2, 'scratchpad': True,
                      'phases': ['先判斷', '動手調配', '記錄數據', '提出論證', '應用遷移']}
            src = ('window.DECK_CONFIG = ' + json.dumps(config, ensure_ascii=False) + ';\n' if i == 1 else '') + \
                  'window.DECK = window.DECK || [];\nwindow.DECK.push(' + json.dumps(chapter, ensure_ascii=False, indent=2) + ');\n'
        with open(os.path.join(out, 'ch%d.js' % i), 'w', encoding='utf-8', newline='\n') as fh:
            fh.write(src)

    if lesson_source is not None:
        if len(chapters) != 1:
            p.error('--lesson 請搭配一個 --chapters 項目；課程可在 JS 內自行定義多章')
        with open(os.path.join(out, 'ch1.js'), 'w', encoding='utf-8', newline='\n') as fh:
            fh.write(lesson_source)
    tpl = open(os.path.join(ASSETS, 'index.template.html'), encoding='utf-8').read()
    if a.mode == 'inquiry':
        tpl = re.sub(r'  <script>.*?</script>\s*<script src="https://cdn.jsdelivr.net/.*?</script>', '', tpl, count=1, flags=re.S)
    tpl = tpl.replace('{{EXTRA_STYLES}}', '<link rel="stylesheet" href="inquiry.css?v=' + version + '" />' if a.mode == 'inquiry' else '')
    tpl = tpl.replace('{{INQUIRY_SCRIPTS}}', '\n'.join('  <script src="' + f + '?v=' + version + '"></script>' for f in ('inquiry-model.js', 'inquiry.js')) if a.mode == 'inquiry' else '')
    scripts = '\n'.join('  <script src="ch%d.js?v=%s"></script>' % (i, version)
                        for i in range(1, len(chapters) + 1))
    html = (tpl.replace('{{TITLE}}', escape(a.title, quote=True))
               .replace('{{DESCRIPTION}}', escape(a.description or a.title, quote=True))
               .replace('{{EYEBROW}}', escape(a.eyebrow, quote=True))
               .replace('{{COVER_TITLE}}', escape(a.cover_title or a.title, quote=True))
               .replace('{{COVER_SUB}}', escape(a.sub, quote=True))
               .replace('{{HOME_LABEL}}', escape(a.home, quote=True))
               .replace('{{VERSION}}', version)
               .replace('{{CHAPTER_SCRIPTS}}', scripts))
    with open(os.path.join(out, 'index.html'), 'w', encoding='utf-8', newline='\n') as fh:
        fh.write(html)

    total = sum(len(s) for _, _, s in chapters) * (5 if a.mode == 'inquiry' else a.slides_per_section)
    print('✅ 已建立 %s' % out)
    if lesson_source is not None:
        print('   已載入完整課程，頁數以驗證器統計為準')
    else:
        print('   %d 章、%d 張骨架投影片' % (len(chapters), total))
    print('   資源版本號 ?v=%s' % version)
    print()
    print('下一步：')
    print('  1. 編輯 %s/ch1.js …… 填入實際內容' % os.path.basename(out))
    print('  2. node scripts/verify_deck.js %s' % a.out)
    print('  3. python -m http.server 8890 --directory %s' % a.out)


if __name__ == '__main__':
    main()
