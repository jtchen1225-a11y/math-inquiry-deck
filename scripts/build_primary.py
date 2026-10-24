#!/usr/bin/env python3
"""Build 30 independent six-step P1 lessons, sharing the framework assets."""
from pathlib import Path
import hashlib,json,re
from html import escape
ROOT=Path(__file__).resolve().parent.parent
PHASES=['生活疑問','大膽猜測','動手探究','數學驗證','解釋發現','生活應用']
THEMES=['citrus','ocean','teal','violet','berry','lime']
ICONS=['🧭','📏','🔟','👫','🍮','🦋','🐟','⚖️','🧊','🥢','📦','🐾','🟠','🥢','🐜','💯','🫘','🕒','⏳','📅','📚','🔄','🪙','🛒','📎','📏','🔺','🧩','🍎','🔎']
assets=['style.css','inquiry.css','primary.css','svg.js','inquiry-model.js','primary-model.js','primary.js','inquiry.js','engine.js']
def build():
 data=json.loads((ROOT/'lessons/primary/lessons.json').read_text(encoding='utf-8'))
 assert [d['week'] for d in data]==list(range(1,31))
 blob=(ROOT/'lessons/primary/lessons.json').read_text(encoding='utf-8').encode('utf-8')+b''.join((ROOT/'assets'/f).read_text(encoding='utf-8').encode('utf-8') for f in assets)
 version=hashlib.sha256(blob).hexdigest()[:12]
 template=(ROOT/'assets/index.template.html').read_text(encoding='utf-8')
 template=re.sub(r'  <script>.*?</script>\s*<script src="https://cdn.jsdelivr.net/.*?</script>','',template,count=1,flags=re.S)
 cards=[];manifest=[]
 for l in data:
  w=l['week'];folder=ROOT/'primary'/f'week{w:02d}';folder.mkdir(parents=True,exist_ok=True)
  def page(id,phase,kind,title,prompt,**kwargs):
   return {'id':f'p1-w{w:02d}-{id}','phase':phase,'kind':kind,'title':title,'prompt':prompt,'sec':f'{w:02d}-{phase+1}',
           'secName':PHASES[phase],'theme':THEMES[(phase+w-1)%6],'worksheet':f'第{w:02d}週｜{phase+1} {PHASES[phase]}',**kwargs}
  context={'icon':ICONS[w-1],'label':l['title']}
  slides=[
   page('life',0,'question',l['title'],l['life'],choices=l['choices'],context=context,hint='先指一指、猜一猜；老師可朗讀，不急著公布答案。'),
   page('guess',1,'question','先說你的猜想，怎樣查？',l['guess'],choices=l['choices'],context=context,hint='可以畫、擺或口述；猜錯後有證據就能修改。'),
   page('explore',2,'primary',l['labTitle'],l['materials'],app=l['app'],instructions=l['steps']),
   page('compare',2,'primary','換個例子，還一樣嗎？','輪流操作第二個情況。指出哪個條件改了、哪個沒有改。',app=l['compareApp'],hint='先猜結果再操作，將兩次發現對照記在工作紙。'),
   page('verify',3,'primary','用圖或實物再查一次',l['verify'],app=l['app'],hint='先自己核對，再按「看看數據與核對」；畫面不是答案唯一來源。'),
   page('practice1',3,'task','基礎練習 1：先做，再核對',l['basic'][0],reveals=['先指出題目已知甚麼、要找甚麼。','核對：'+l['answers'][0],'請用剛才的教具或紙上畫圖說明，別只報答案。']),
   page('practice2',3,'task','基礎練習 2：你的證據在哪裡？',l['basic'][1],reveals=['先畫出或擺出數量關係，再計算。','核對：'+l['answers'][1],'換一種方法再查，看看兩次是否相同。']),
   page('explain',4,'p1-talk','指著證據，說給同伴聽',l['explain'],reveals=['先說「我發現……」，再指向實物或圖。','請同伴問「你怎樣知道？」或「換一個例子呢？」。']),
   page('apply',5,'primary','把方法用在生活裡',l['apply'],app=l['applyApp'],hint='畫面是幫助思考的教具，正式答案與理由寫在工作紙。'),
   page('challenge',5,'p1-talk','再想一步：能找到反例嗎？',l['challenge'],reveals=['先只改一個條件，試兩個小例子。','如果發現不一樣，說清楚原來的說法在哪個條件下才成立。'])]
  cfg={'mode':'inquiry','id':f'p1-week{w:02d}','version':3,'ageBand':'p1','scratchpad':True,'phases':PHASES}
  deck=[{'ch':1,'title':f'第{w:02d}週 {l["title"]}','color':'#126b9b','sections':[f'{w:02d}-{i+1} {name}' for i,name in enumerate(PHASES)],'slides':slides}]
  (folder/'ch1.js').write_text('window.DECK_CONFIG='+json.dumps(cfg,ensure_ascii=False)+';\nwindow.DECK='+json.dumps(deck,ensure_ascii=False,indent=2)+';\n',encoding='utf-8',newline='\n')
  replacements={'TITLE':f'小一第{w:02d}週 {l["title"]}','DESCRIPTION':l['life'],'EYEBROW':'小一數學思維 · 六步探究 · 一組一部 iPad',
   'COVER_TITLE':l['title'],'COVER_SUB':' → '.join(PHASES),'HOME_LABEL':f'第{w:02d}週','VERSION':version,
   'EXTRA_STYLES':''.join(f'<link rel="stylesheet" href="../../assets/{f}?v={version}">' for f in ['inquiry.css','primary.css']),
   'CHAPTER_SCRIPTS':f'<script src="ch1.js?v={version}"></script>',
   'INQUIRY_SCRIPTS':''.join(f'<script src="../../assets/{f}?v={version}"></script>' for f in ['inquiry-model.js','primary-model.js','primary.js','inquiry.js'])}
  text=template
  for k,v in replacements.items():text=text.replace('{{'+k+'}}',v if k in ['EXTRA_STYLES','CHAPTER_SCRIPTS','INQUIRY_SCRIPTS'] else escape(v,quote=True))
  text=text.replace('href="style.css?', 'href="../../assets/style.css?').replace('src="svg.js?', 'src="../../assets/svg.js?').replace('src="engine.js?', 'src="../../assets/engine.js?')
  text=text.replace('<div class="top-actions">','<div class="top-actions"><a class="ghost-btn primary-back" href="../">30週課程</a>')
  (folder/'index.html').write_text(text,encoding='utf-8',newline='\n')
  manifest.append({'week':w,'title':l['title'],'source':l['source'],'url':f'week{w:02d}/','pages':10,'phases':6,'activity':l['app']['type'],'domain':l['domain']})
  cards.append(f'<a class="lesson-card" href="week{w:02d}/" data-domain="{l["domain"]}" data-title="{escape(l["title"])}"><span class="week">第{w:02d}週</span><span class="icon">{ICONS[w-1]}</span><h2>{escape(l["title"])}</h2><p>{escape(l["life"])}</p><footer>{l["domain"]} · 10頁 · 六步探究 <b>進入 →</b></footer></a>')
 hub='''<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>小一30週數學思維探究課</title><link rel="stylesheet" href="catalog.css"></head><body><main><header><a href="../">← Math Inquiry Deck</a><p class="eyebrow">PRIMARY 1 · 六步探究 · 紙本作答</p><h1>小小數學家<br>一起動手，找出理由</h1><p class="intro">30週獨立互動簡報，每週對應一份工作紙。老師可朗讀，學生輪流操作、擺一擺、指一指，再用圖或實物說明。</p><div class="flow">生活疑問 → 大膽猜測 → 動手探究 → 數學驗證 → 解釋發現 → 生活應用</div></header><section class="tools" aria-label="篩選課程"><label>找一週或一個主題<input id="search" type="search" placeholder="例如：十格、時間、硬幣……"></label><label>主題範疇<select id="domain"><option>全部</option><option>數與運算</option><option>空間與圖形</option><option>量度與時間</option><option>生活與數據</option></select></label><p id="count" aria-live="polite">30份課程</p></section><section class="catalog">''' + ''.join(cards)+'''</section><p id="empty" hidden>沒有相符課程，試試另一個關鍵字。</p><footer class="notice">一組共用一部 iPad，正式答案寫在工作紙。臨時書寫與操作不保存、不匯出。量尺是示意刻度，空間與穩定性活動仍要配合實物。<br>來源：小一工作紙按週分冊六步探究版；未公開原始 Word 文件。</footer></main><script>const cards=[...document.querySelectorAll('.lesson-card')];function filter(){let n=0;const q=document.querySelector('#search').value.trim(),d=document.querySelector('#domain').value;cards.forEach(c=>{c.hidden=!(c.textContent.includes(q)&&(d==='全部'||c.dataset.domain===d));if(!c.hidden)n++;});document.querySelector('#count').textContent=n+'份課程';document.querySelector('#empty').hidden=n>0;}document.querySelector('#search').addEventListener('input',filter);document.querySelector('#domain').addEventListener('change',filter);</script></body></html>'''
 (ROOT/'primary/index.html').write_text(hub,encoding='utf-8',newline='\n')
 (ROOT/'primary/manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8',newline='\n')
 print('Built 30 lessons / 300 pages / 6 phases; asset version',version)
if __name__=='__main__':build()
