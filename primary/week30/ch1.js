window.DECK_CONFIG={"mode": "inquiry", "id": "p1-week30", "version": 3, "ageBand": "p1", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第30週 四宮格圖形數獨與綜合排除法",
    "color": "#126b9b",
    "sections": [
      "30-1 生活疑問",
      "30-2 大膽猜測",
      "30-3 動手探究",
      "30-4 數學驗證",
      "30-5 解釋發現",
      "30-6 生活應用"
    ],
    "slides": [
      {
        "id": "p1-w30-life",
        "phase": 0,
        "kind": "question",
        "title": "四宮格圖形數獨與綜合排除法",
        "prompt": "四種圖形要住進4乘4方格。每行、每列、每個粗框2乘2宮都要四種各一個。怎樣填空？",
        "sec": "30-1",
        "secName": "生活疑問",
        "theme": "lime",
        "worksheet": "第30週｜1 生活疑問",
        "choices": [
          "先看行",
          "也要看列與宮",
          "不確定先保留候選"
        ],
        "context": {
          "icon": "🔎",
          "label": "四宮格圖形數獨與綜合排除法"
        },
        "hint": "先指一指、猜一猜；老師可朗讀，不急著公布答案。"
      },
      {
        "id": "p1-w30-guess",
        "phase": 1,
        "kind": "question",
        "title": "先說你的猜想，怎樣查？",
        "prompt": "先選一格，猜可填___；也可能是___。",
        "sec": "30-2",
        "secName": "大膽猜測",
        "theme": "citrus",
        "worksheet": "第30週｜2 大膽猜測",
        "choices": [
          "先看行",
          "也要看列與宮",
          "不確定先保留候選"
        ],
        "context": {
          "icon": "🔎",
          "label": "四宮格圖形數獨與綜合排除法"
        },
        "hint": "可以畫、擺或口述；猜錯後有證據就能修改。"
      },
      {
        "id": "p1-w30-explore",
        "phase": 2,
        "kind": "primary",
        "title": "一個格子，要同時遵守哪些規則？",
        "prompt": "材料：附頁數獨、鉛筆、四種圖形卡",
        "sec": "30-3",
        "secName": "動手探究",
        "theme": "ocean",
        "worksheet": "第30週｜3 動手探究",
        "app": {
          "type": "sudoku"
        },
        "instructions": [
          "1. 用○、□、△、☆四種圖形，先選一個空格。",
          "2. 查同一行、同一列、同一宮，劃去不能用的圖形。",
          "3. 每填一格再檢查；不確定時先寫候選，不急填。"
        ]
      },
      {
        "id": "p1-w30-compare",
        "phase": 2,
        "kind": "primary",
        "title": "換個例子，還一樣嗎？",
        "prompt": "輪流操作第二個情況。指出哪個條件改了、哪個沒有改。",
        "sec": "30-3",
        "secName": "動手探究",
        "theme": "ocean",
        "worksheet": "第30週｜3 動手探究",
        "app": {
          "type": "sudoku",
          "help": true
        },
        "hint": "先猜結果再操作，將兩次發現對照記在工作紙。"
      },
      {
        "id": "p1-w30-verify",
        "phase": 3,
        "kind": "primary",
        "title": "用圖或實物再查一次",
        "prompt": "完成整盤後，逐行、逐列、逐宮各查一次。有沒有重複或漏掉？",
        "sec": "30-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第30週｜4 數學驗證",
        "app": {
          "type": "sudoku"
        },
        "hint": "先自己核對，再按「看看數據與核對」；畫面不是答案唯一來源。"
      },
      {
        "id": "p1-w30-practice1",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 1：先做，再核對",
        "prompt": "1. 在四宮格的一行中，已經有了 1、2、4，空格裡應該填 (   )。（填數字）",
        "sec": "30-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第30週｜4 數學驗證",
        "reveals": [
          "先指出題目已知甚麼、要找甚麼。",
          "核對：一行缺3。",
          "請用剛才的教具或紙上畫圖說明，別只報答案。"
        ]
      },
      {
        "id": "p1-w30-practice2",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 2：你的證據在哪裡？",
        "prompt": "2. 一個2乘2小宮格已有☆、○、□，還缺（   ）。（△／☆）",
        "sec": "30-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第30週｜4 數學驗證",
        "reveals": [
          "先畫出或擺出數量關係，再計算。",
          "核對：小宮還缺△。",
          "換一種方法再查，看看兩次是否相同。"
        ]
      },
      {
        "id": "p1-w30-explain",
        "phase": 4,
        "kind": "p1-talk",
        "title": "指著證據，說給同伴聽",
        "prompt": "選一格說明：為甚麼其他圖形不能填？你的猜測有改嗎？",
        "sec": "30-5",
        "secName": "解釋發現",
        "theme": "violet",
        "worksheet": "第30週｜5 解釋發現",
        "reveals": [
          "先說「我發現……」，再指向實物或圖。",
          "請同伴問「你怎樣知道？」或「換一個例子呢？」。"
        ]
      },
      {
        "id": "p1-w30-apply",
        "phase": 5,
        "kind": "primary",
        "title": "把方法用在生活裡",
        "prompt": "設計4個物件的排放規則，再讓同伴排；加做○＋○＝4，□＋○＝5，畫圖找○、□。",
        "sec": "30-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第30週｜6 生活應用",
        "app": {
          "type": "sudoku",
          "logic": true
        },
        "hint": "畫面是幫助思考的教具，正式答案與理由寫在工作紙。"
      },
      {
        "id": "p1-w30-challenge",
        "phase": 5,
        "kind": "p1-talk",
        "title": "再想一步：能找到反例嗎？",
        "prompt": "只看一行能保證正確嗎？找一個在行裡不重複、卻與列或小宮衝突的試填。",
        "sec": "30-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第30週｜6 生活應用",
        "reveals": [
          "先只改一個條件，試兩個小例子。",
          "如果發現不一樣，說清楚原來的說法在哪個條件下才成立。"
        ]
      }
    ]
  }
];
