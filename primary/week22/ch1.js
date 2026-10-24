window.DECK_CONFIG={"mode": "inquiry", "id": "p1-week22", "version": 3, "ageBand": "p1", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第22週 減法比多比少與逆向推理",
    "color": "#126b9b",
    "sections": [
      "22-1 生活疑問",
      "22-2 大膽猜測",
      "22-3 動手探究",
      "22-4 數學驗證",
      "22-5 解釋發現",
      "22-6 生活應用"
    ],
    "slides": [
      {
        "id": "p1-w22-life",
        "phase": 0,
        "kind": "question",
        "title": "減法比多比少與逆向推理",
        "prompt": "紅隊進38球，藍隊進15球，相差多少？另有一籃蘋果，送出5個後剩12個，原有多少？",
        "sec": "22-1",
        "secName": "生活疑問",
        "theme": "violet",
        "worksheet": "第22週｜1 生活疑問",
        "choices": [
          "兩題同方法",
          "兩題方法不同",
          "先畫已知與未知"
        ],
        "context": {
          "icon": "🔄",
          "label": "減法比多比少與逆向推理"
        },
        "hint": "先指一指、猜一猜；老師可朗讀，不急著公布答案。"
      },
      {
        "id": "p1-w22-guess",
        "phase": 1,
        "kind": "question",
        "title": "先說你的猜想，怎樣查？",
        "prompt": "我猜兩題要用相同／不同方法；我先試畫圖。",
        "sec": "22-2",
        "secName": "大膽猜測",
        "theme": "berry",
        "worksheet": "第22週｜2 大膽猜測",
        "choices": [
          "兩題同方法",
          "兩題方法不同",
          "先畫已知與未知"
        ],
        "context": {
          "icon": "🔄",
          "label": "減法比多比少與逆向推理"
        },
        "hint": "可以畫、擺或口述；猜錯後有證據就能修改。"
      },
      {
        "id": "p1-w22-explore",
        "phase": 2,
        "kind": "primary",
        "title": "看到「送出」，就一定用減法嗎？",
        "prompt": "材料：計數片、紙條",
        "sec": "22-3",
        "secName": "動手探究",
        "theme": "lime",
        "worksheet": "第22週｜3 動手探究",
        "app": {
          "type": "reverse",
          "a": 38,
          "b": 15,
          "mode": "difference"
        },
        "instructions": [
          "1. 用紙條畫38格和15格，一端對齊，比多出部分。",
          "2. 用12塊圓片表示剩下的，想辦法還原送出前。",
          "3. 把還原的總數再送出5塊，核對。"
        ]
      },
      {
        "id": "p1-w22-compare",
        "phase": 2,
        "kind": "primary",
        "title": "換個例子，還一樣嗎？",
        "prompt": "輪流操作第二個情況。指出哪個條件改了、哪個沒有改。",
        "sec": "22-3",
        "secName": "動手探究",
        "theme": "lime",
        "worksheet": "第22週｜3 動手探究",
        "app": {
          "type": "reverse",
          "a": 12,
          "b": 5,
          "mode": "restore"
        },
        "hint": "先猜結果再操作，將兩次發現對照記在工作紙。"
      },
      {
        "id": "p1-w22-verify",
        "phase": 3,
        "kind": "primary",
        "title": "用圖或實物再查一次",
        "prompt": "原有___－5＝12；再用12＋5＝___查。說明兩式的每個數。",
        "sec": "22-4",
        "secName": "數學驗證",
        "theme": "citrus",
        "worksheet": "第22週｜4 數學驗證",
        "app": {
          "type": "reverse",
          "a": 38,
          "b": 15,
          "mode": "difference"
        },
        "hint": "先自己核對，再按「看看數據與核對」；畫面不是答案唯一來源。"
      },
      {
        "id": "p1-w22-practice1",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 1：先做，再核對",
        "prompt": "1. 48 隻小鴨在池塘，游走 16 隻，還剩下 (   ) 隻小鴨。",
        "sec": "22-4",
        "secName": "數學驗證",
        "theme": "citrus",
        "worksheet": "第22週｜4 數學驗證",
        "reveals": [
          "先指出題目已知甚麼、要找甚麼。",
          "核對：48−16＝32隻。",
          "請用剛才的教具或紙上畫圖說明，別只報答案。"
        ]
      },
      {
        "id": "p1-w22-practice2",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 2：你的證據在哪裡？",
        "prompt": "2. 樹上有一群鳥，飛走 8 隻後還剩 11 隻。樹上原來有 (   ) 隻鳥。",
        "sec": "22-4",
        "secName": "數學驗證",
        "theme": "citrus",
        "worksheet": "第22週｜4 數學驗證",
        "reveals": [
          "先畫出或擺出數量關係，再計算。",
          "核對：11＋8＝19隻，送走前要把8隻加回。",
          "換一種方法再查，看看兩次是否相同。"
        ]
      },
      {
        "id": "p1-w22-explain",
        "phase": 4,
        "kind": "p1-talk",
        "title": "指著證據，說給同伴聽",
        "prompt": "為甚麼不能只看到「送出」就決定用減法？",
        "sec": "22-5",
        "secName": "解釋發現",
        "theme": "ocean",
        "worksheet": "第22週｜5 解釋發現",
        "reveals": [
          "先說「我發現……」，再指向實物或圖。",
          "請同伴問「你怎樣知道？」或「換一個例子呢？」。"
        ]
      },
      {
        "id": "p1-w22-apply",
        "phase": 5,
        "kind": "primary",
        "title": "把方法用在生活裡",
        "prompt": "哥哥比弟弟多6支筆。給弟弟幾支才一樣多？畫圖移動筆，查兩邊數量。",
        "sec": "22-6",
        "secName": "生活應用",
        "theme": "teal",
        "worksheet": "第22週｜6 生活應用",
        "app": {
          "type": "reverse",
          "a": 10,
          "b": 4,
          "mode": "share"
        },
        "hint": "畫面是幫助思考的教具，正式答案與理由寫在工作紙。"
      },
      {
        "id": "p1-w22-challenge",
        "phase": 5,
        "kind": "p1-talk",
        "title": "再想一步：能找到反例嗎？",
        "prompt": "哥哥多6支，為甚麼只給3支就能一樣多？追蹤兩邊各變了多少。",
        "sec": "22-6",
        "secName": "生活應用",
        "theme": "teal",
        "worksheet": "第22週｜6 生活應用",
        "reveals": [
          "先只改一個條件，試兩個小例子。",
          "如果發現不一樣，說清楚原來的說法在哪個條件下才成立。"
        ]
      }
    ]
  }
];
