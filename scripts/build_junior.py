#!/usr/bin/env python3
"""Build 30 source-aligned P3 decks (12 pages each) and a teacher QR portal."""
from pathlib import Path
from html import escape
import hashlib,json,re
ROOT=Path(__file__).resolve().parent.parent
PHASES=['生活疑問','大膽猜測','動手探究','數學驗證','解釋發現','生活應用']
THEMES=['ocean','citrus','teal','violet','berry','lime','coral']
ASSETS=['style.css','inquiry.css','junior.css','svg.js','inquiry-model.js','junior-model.js','junior.js','inquiry.js','engine.js','junior-access.js','junior-teacher.js','junior-share.js','qrcode.js']
def build():
 data=json.loads((ROOT/'lessons/junior/lessons.json').read_text(encoding='utf-8'))
 assert [l['week'] for l in data]==list(range(1,31))
 blob=(ROOT/'lessons/junior/lessons.json').read_text(encoding='utf-8').encode()+b''.join((ROOT/'assets'/f).read_text(encoding='utf-8').encode() for f in ASSETS)
 version=hashlib.sha256(blob).hexdigest()[:12]
 template=(ROOT/'assets/index.template.html').read_text(encoding='utf-8')
 template=re.sub(r'  <script>.*?</script>\s*<script src="https://cdn.jsdelivr.net/.*?</script>','',template,count=1,flags=re.S)
 cards=[];manifest=[];teacher=[];guide=[]
 for l in data:
  w=l['week'];folder=ROOT/'junior'/f'week{w:02d}';folder.mkdir(parents=True,exist_ok=True)
  entry=hashlib.sha256(('p3-classroom-routing-v1-'+str(w)+'-'+l['title']).encode()).hexdigest()[:20]
  def page(id,phase,kind,title,prompt,**kwargs):
   return {'id':f'p3-w{w:02d}-{id}','phase':phase,'kind':kind,'title':title,'prompt':prompt,'sec':f'{w:02d}-{phase+1}',
    'secName':PHASES[phase],'theme':THEMES[(w+phase)%7],'worksheet':f'第{w:02d}週｜{phase+1} {PHASES[phase]}',**kwargs}
  def model(index):
   app=json.loads(json.dumps(l['app']));index=[0,2,4][index] if w==16 else index;app.update(app['cases'][index]['values']);app['caseIndex']=index;return app
  slides=[
   page('life',0,'question',l['title'],l['life'],choices=['我有一個猜想','我需要更多資料','我能想到不同情況'],context={'icon':'🔎','label':l['textbook']},hint='先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。'),
   page('guess',1,'question','先提出可檢查的猜想',l['guess'],choices=['我用圖或實物檢查','我用列表或算式檢查','我先找一個可能的反例'],hint='說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。'),
   page('explore',2,'junior','動手試：'+l['cases'][0],l['life'],app=model(0),instructions=l['steps']),
   page('compare',2,'junior','改變條件，再查一次',l['cases'][1],app=model(1),hint='指出與前一頁相比改了哪個量；先預測，再核對。'),
   page('compare-again',2,'junior','第三個情況：能延用方法嗎？',l['cases'][2],app=model(2),hint='把三次結果記在工作紙原表格；找相同處、不同處及成立條件。'),
   page('verify',3,'junior','方法核對：由結果走回題目','用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。',app=model(0),instructions=['先遮住核對結果，用第二種方法重做。','指出兩種方法用了哪一個共同的數量關係。']),
   page('practice1',3,'task','原工作紙練習 1',l['basic'][0],reveals=['先列出已知、未知及單位，用紙上圖示或算式獨立完成。','核對：'+l['answers'][0],'指出你的方法在哪一步與模型或另一種算法相同。']),
   page('practice2',3,'task','原工作紙練習 2',l['basic'][1],reveals=['先判斷合理範圍，保留中間過程。','核對：'+l['answers'][1],'如果兩種方法不同，找第一個出現差異的步驟。']),
   page('explain',4,'argument','把證據連成理由',l['explain'],reveals=['主張：我認為……，成立條件是……。','證據：引用工作紙某一行的圖、數據或操作。','道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。']),
   page('counter',4,'task','數學小法庭：這句話一定對嗎？',l['counter'],reveals=['先弄清楚「一定」「可能」「同樣」指的是甚麼。','只改一個條件找反例；若找不到，說出你已檢查了哪些情況。','一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。']),
   page('apply',5,'junior','原工作紙生活應用',l['apply'],app=l['applyApp'],hint='用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。'),
   page('transfer',5,'task','把問題交給下一組','改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。',reveals=['先說哪個條件改變，哪些條件保持一致。','要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。','回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。'])]
  cfg={'mode':'inquiry','id':f'p3-week{w:02d}','version':4,'ageBand':'p3','scratchpad':True,'phases':PHASES}
  deck=[{'ch':1,'title':f'第{w:02d}週 {l["title"]}','color':'#126b9b','sections':[f'{w:02d}-{i+1} {p}' for i,p in enumerate(PHASES)],'slides':slides}]
  (folder/'ch1.js').write_text('window.DECK_CONFIG='+json.dumps(cfg,ensure_ascii=False)+';\nwindow.DECK='+json.dumps(deck,ensure_ascii=False,indent=2)+';\n',encoding='utf-8',newline='\n')
  replacements={'TITLE':f'小三第{w:02d}週 {l["title"]}','DESCRIPTION':l['life'],'EYEBROW':f'小三數學思維 · 第{w:02d}週 · 六步探究','COVER_TITLE':l['title'],'COVER_SUB':' → '.join(PHASES),'HOME_LABEL':f'第{w:02d}週','VERSION':version,
   'EXTRA_STYLES':''.join(f'<link rel="stylesheet" href="../../assets/{f}?v={version}">' for f in ['inquiry.css','junior.css'])+f'<script>window.CLASSROOM_ENTRY={json.dumps(entry)};</script><script src="../../assets/junior-access.js?v={version}"></script>',
   'CHAPTER_SCRIPTS':f'<script src="ch1.js?v={version}"></script>',
   'INQUIRY_SCRIPTS':''.join(f'<script src="../../assets/{f}?v={version}"></script>' for f in ['inquiry-model.js','junior-model.js','junior.js','inquiry.js','qrcode.js'])}
  html=template
  for k,v in replacements.items():html=html.replace('{{'+k+'}}',v if k in ['EXTRA_STYLES','CHAPTER_SCRIPTS','INQUIRY_SCRIPTS'] else escape(v,quote=True))
  html=html.replace('href="style.css?','href="../../assets/style.css?').replace('src="svg.js?','src="../../assets/svg.js?').replace('src="engine.js?','src="../../assets/engine.js?')
  html=html.replace('</body>',f'<script src="../../assets/junior-share.js?v={version}"></script></body>')
  (folder/'index.html').write_text(html,encoding='utf-8',newline='\n')
  manifest.append({'week':w,'title':l['title'],'source':l['source'],'textbook':l['textbook'],'url':f'week{w:02d}/','teacherUrl':f'./#week{w:02d}','pages':12,'phases':6,'activity':l['app']['type'],'domain':l['domain']})
  teacher.append({'week':w,'title':l['title'],'entry':entry})
  color=['#1b7d84','#a55d1f','#77549b','#a5476c'][w%4]
  cards.append(f'<article data-week-card="{w}" style="--color:{color}"><small>第{w:02d}週 · 12頁 · 六步探究</small><h2>{escape(l["title"])}</h2><p>{escape(l["textbook"])}</p><button type="button" data-open-week="{w}">打開本週二維碼</button></article>')
  guide.append(f'| {w:02d} | {l["title"]} | {l["app"]["type"]} | {l["counter"]} |')
 hub='''<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>小三30週教師開課台</title><link rel="stylesheet" href="../assets/junior.css?v=VERSION"></head><body class="teacher-body"><main class="teacher"><a href="../">← Math Inquiry Deck</a><p>PRIMARY 3 · 課本連結 · 小組共用 iPad ＋ 紙本作答</p><h1>小三探究課<br>選定本週，再讓學生掃碼</h1><p>30份獨立簡報，共360頁。老師按「打開本週二維碼」，投影二維碼讓小組掃描；再按「教師進入本課」開啟簡報。學生頁只有當週內容，沒有跨週選單。</p><section id="classroom" hidden aria-label="本週開課二維碼"><h2 id="classTitle" tabindex="-1"></h2><canvas class="j-qr" id="joinQR" role="img"></canvas><p>請先核對週次與工作紙標題，再掃碼。</p><a id="teacherDeck" class="action" target="_blank" rel="noopener">教師進入本課 →</a><a id="studentLink" class="action" target="_blank" rel="noopener">測試學生入口 →</a><p id="joinLink"></p><button id="closeQR" type="button">收起本週二維碼</button><p>收起只會隱藏投影上的二維碼，已分享的連結仍可使用。</p></section><label>尋找週次或主題<input id="search" type="search" placeholder="例如：乘法、周界、分數……"></label><p id="count">30份課程</p><section class="week-grid">CARDS</section><footer><p>六步：生活疑問 → 大膽猜測 → 動手探究 → 數學驗證 → 解釋發現 → 生活應用。學生正式答案寫在工作紙，操作與臨時草算不保存、不匯出。</p><p>入口是防止誤入週次的課堂導流，不是身分驗證或即時開關課服務。此公開靜態網站沒有教師登入；知道或取得其他週連結的人仍可開啟。實測量度與重量活動請配合實物。</p></footer></main><script>window.JUNIOR_LESSONS=__LESSON_DATA__;</script><script src="../assets/qrcode.js?v=VERSION"></script><script src="../assets/junior-teacher.js?v=VERSION"></script></body></html>'''.replace('CARDS',''.join(cards)).replace('__LESSON_DATA__',json.dumps(teacher,ensure_ascii=False)).replace('VERSION',version)
 (ROOT/'junior/index.html').write_text(hub,encoding='utf-8',newline='\n')
 (ROOT/'junior/manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8',newline='\n')
 guide_text='''# 小三30週教師指南\n\n每週12頁：生活疑問、大膽猜測、三頁動手比較、方法核對、兩道原練習、證據說理、反例小法庭、原生活應用、遷移反思。共30份360頁。\n\n## 開課與二維碼\n\n開啟 junior/ 教師台，選本週「打開本週二維碼」，投影給學生，再按「教師進入本課」。教師進入課程後，工具列也可按「本週二維碼」隨時顯示。每週有不同入口碼，直接輸入另一週路徑或帶著錯週入口碼會要求重新掃碼。學生頁不含跨週入口。重新整理仍沿用網址中的入口碼，不保存學生作答。\n\n這是避免誤入的課堂導流，不是認證。公開Repo與教師台可讀取入口；收起二維碼不會撤銷連結，未提供跨裝置即時鎖課。若需教師帳號與即時關課，需另接授權及會話後端。\n\n## 教學安排\n\n每組輪流擔任操作、觀察、紙本記錄及報告。三次條件比較對應工作紙表格，先猜再按核對。原題數據、兩道練習及生活應用保留；反例與追問為延伸活動。依課堂時間將最後遷移頁留作下一節討論。\n\n- 位值交換須連回直式；算式與數位不是只按按鈕取得答案。\n- 數位尺、方格不代表螢幕實際厘米；第21週1厘米方格必須用工作紙實際列印尺寸。\n- 第19週自選物件重量沒有預填；天平只為示意，請實測並記真實結果。\n- 分數需檢查同一整體與平均分；第24週整粒物件總數要可整除。\n- 積木採2×2位置高度模型，視圖需標前方，使用真積木核對遮擋。\n- 第30週模擬抽珠每次放回；改配方清空本輪。不保證20次必符合袋內比例。原實物結果仍記紙上。\n\n## 每週教具與說理追問\n\n| 週 | 主題 | 教具 | 反例與追問 |\n|---|---|---|---|\n'''+ '\n'.join(guide)+'\n\n來源：使用者提供的小三課本連結六步探究版兩頁OMML工作紙。課本頁碼沿用工作紙提供的對照，未獨立核實課本內容；不公開原DOCX或學生個資。\n'
 (ROOT/'references/junior-guide.md').write_text(guide_text,encoding='utf-8',newline='\n')
 print('Built 30 P3 lessons / 360 pages / 6 phases; asset version',version)
if __name__=='__main__':build()
