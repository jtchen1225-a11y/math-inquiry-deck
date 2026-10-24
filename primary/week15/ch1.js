window.DECK_CONFIG={"mode": "inquiry", "id": "p1-week15", "version": 3, "ageBand": "p1", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第15週 線條路徑與封閉迷宮",
    "color": "#126b9b",
    "sections": [
      "15-1 生活疑問",
      "15-2 大膽猜測",
      "15-3 動手探究",
      "15-4 數學驗證",
      "15-5 解釋發現",
      "15-6 生活應用"
    ],
    "slides": [
      {
        "id": "p1-w15-life",
        "phase": 0,
        "kind": "question",
        "title": "線條路徑與封閉迷宮",
        "prompt": "小螞蟻從家到糖粒，有直路和彎路。哪條較短？怎樣查？",
        "sec": "15-1",
        "secName": "生活疑問",
        "theme": "teal",
        "worksheet": "第15週｜1 生活疑問",
        "choices": [
          "直路較短",
          "彎路較短",
          "先用繩查"
        ],
        "context": {
          "icon": "🐜",
          "label": "線條路徑與封閉迷宮"
        },
        "hint": "先指一指、猜一猜；老師可朗讀，不急著公布答案。"
      },
      {
        "id": "p1-w15-guess",
        "phase": 1,
        "kind": "question",
        "title": "先說你的猜想，怎樣查？",
        "prompt": "我猜___路較短；我想用___比較。",
        "sec": "15-2",
        "secName": "大膽猜測",
        "theme": "violet",
        "worksheet": "第15週｜2 大膽猜測",
        "choices": [
          "直路較短",
          "彎路較短",
          "先用繩查"
        ],
        "context": {
          "icon": "🐜",
          "label": "線條路徑與封閉迷宮"
        },
        "hint": "可以畫、擺或口述；猜錯後有證據就能修改。"
      },
      {
        "id": "p1-w15-explore",
        "phase": 2,
        "kind": "primary",
        "title": "同一個起點和終點，怎樣比路長？",
        "prompt": "材料：白紙、直尺、軟繩",
        "sec": "15-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第15週｜3 動手探究",
        "app": {
          "type": "path",
          "base": 12,
          "detour": 20
        },
        "instructions": [
          "1. 畫相同起點和終點，畫一條直路和一條彎路。",
          "2. 用軟繩沿路擺，標記兩端，再拉直比較。",
          "3. 畫封閉圍欄和有缺口圍欄，手指試走進去。"
        ]
      },
      {
        "id": "p1-w15-compare",
        "phase": 2,
        "kind": "primary",
        "title": "換個例子，還一樣嗎？",
        "prompt": "輪流操作第二個情況。指出哪個條件改了、哪個沒有改。",
        "sec": "15-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第15週｜3 動手探究",
        "app": {
          "type": "path",
          "base": 12,
          "detour": 20,
          "closed": true
        },
        "hint": "先猜結果再操作，將兩次發現對照記在工作紙。"
      },
      {
        "id": "p1-w15-verify",
        "phase": 3,
        "kind": "primary",
        "title": "用圖或實物再查一次",
        "prompt": "用同一把尺或同樣長的單位查路長。各條路是否有相同起點、終點？",
        "sec": "15-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第15週｜4 數學驗證",
        "app": {
          "type": "path",
          "base": 12,
          "detour": 20
        },
        "hint": "先自己核對，再按「看看數據與核對」；畫面不是答案唯一來源。"
      },
      {
        "id": "p1-w15-practice1",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 1：先做，再核對",
        "prompt": "1. A: ⎯⎯⎯⎯   B: ～～～～。A 是 (   ) 線，B 是 (   ) 線。（填『直』或『曲』）",
        "sec": "15-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第15週｜4 數學驗證",
        "reveals": [
          "先指出題目已知甚麼、要找甚麼。",
          "核對：A是直線；B是曲線。",
          "請用剛才的教具或紙上畫圖說明，別只報答案。"
        ]
      },
      {
        "id": "p1-w15-practice2",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 2：你的證據在哪裡？",
        "prompt": "2. 一個三角形由 (   ) 條筆直的線段圍成。",
        "sec": "15-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第15週｜4 數學驗證",
        "reveals": [
          "先畫出或擺出數量關係，再計算。",
          "核對：三角形由3條直線段圍成。",
          "換一種方法再查，看看兩次是否相同。"
        ]
      },
      {
        "id": "p1-w15-explain",
        "phase": 4,
        "kind": "p1-talk",
        "title": "指著證據，說給同伴聽",
        "prompt": "直路和彎路哪個較短？有沒有缺口會怎樣影響進出？",
        "sec": "15-5",
        "secName": "解釋發現",
        "theme": "citrus",
        "worksheet": "第15週｜5 解釋發現",
        "reveals": [
          "先說「我發現……」，再指向實物或圖。",
          "請同伴問「你怎樣知道？」或「換一個例子呢？」。"
        ]
      },
      {
        "id": "p1-w15-apply",
        "phase": 5,
        "kind": "primary",
        "title": "把方法用在生活裡",
        "prompt": "學校到操場直路20米，繞花壇35米，多走幾米？再畫一個封閉花圃。",
        "sec": "15-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第15週｜6 生活應用",
        "app": {
          "type": "path",
          "base": 20,
          "detour": 35
        },
        "hint": "畫面是幫助思考的教具，正式答案與理由寫在工作紙。"
      },
      {
        "id": "p1-w15-challenge",
        "phase": 5,
        "kind": "p1-talk",
        "title": "再想一步：能找到反例嗎？",
        "prompt": "路線圖看起來長就一定真的長嗎？先確認比例和端點，再用同一單位。",
        "sec": "15-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第15週｜6 生活應用",
        "reveals": [
          "先只改一個條件，試兩個小例子。",
          "如果發現不一樣，說清楚原來的說法在哪個條件下才成立。"
        ]
      }
    ]
  }
];
