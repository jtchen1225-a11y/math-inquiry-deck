window.DECK_CONFIG={"mode": "inquiry", "id": "p1-week12", "version": 3, "ageBand": "p1", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第12週 基數與序數大偵探",
    "color": "#126b9b",
    "sections": [
      "12-1 生活疑問",
      "12-2 大膽猜測",
      "12-3 動手探究",
      "12-4 數學驗證",
      "12-5 解釋發現",
      "12-6 生活應用"
    ],
    "slides": [
      {
        "id": "p1-w12-life",
        "phase": 0,
        "kind": "question",
        "title": "基數與序數大偵探",
        "prompt": "7隻動物排隊。「第4隻」和「前面4隻」是在說同一件事嗎？",
        "sec": "12-1",
        "secName": "生活疑問",
        "theme": "lime",
        "worksheet": "第12週｜1 生活疑問",
        "choices": [
          "指同一件事",
          "一個是位置，一個是數量",
          "要先定隊頭"
        ],
        "context": {
          "icon": "🐾",
          "label": "基數與序數大偵探"
        },
        "hint": "先指一指、猜一猜；老師可朗讀，不急著公布答案。"
      },
      {
        "id": "p1-w12-guess",
        "phase": 1,
        "kind": "question",
        "title": "先說你的猜想，怎樣查？",
        "prompt": "我猜兩句話指的數量相同／不同。",
        "sec": "12-2",
        "secName": "大膽猜測",
        "theme": "citrus",
        "worksheet": "第12週｜2 大膽猜測",
        "choices": [
          "指同一件事",
          "一個是位置，一個是數量",
          "要先定隊頭"
        ],
        "context": {
          "icon": "🐾",
          "label": "基數與序數大偵探"
        },
        "hint": "可以畫、擺或口述；猜錯後有證據就能修改。"
      },
      {
        "id": "p1-w12-explore",
        "phase": 2,
        "kind": "primary",
        "title": "第4個，和前面4個，有何不同？",
        "prompt": "材料：8張動物卡",
        "sec": "12-3",
        "secName": "動手探究",
        "theme": "ocean",
        "worksheet": "第12週｜3 動手探究",
        "app": {
          "type": "ordinal",
          "n": 7,
          "pick": 4
        },
        "instructions": [
          "1. 把7張卡排成一列，標出隊頭。",
          "2. 圈第4張，再用手指出前面4張。",
          "3. 選一張卡，從前和從後各數一次。"
        ]
      },
      {
        "id": "p1-w12-compare",
        "phase": 2,
        "kind": "primary",
        "title": "換個例子，還一樣嗎？",
        "prompt": "輪流操作第二個情況。指出哪個條件改了、哪個沒有改。",
        "sec": "12-3",
        "secName": "動手探究",
        "theme": "ocean",
        "worksheet": "第12週｜3 動手探究",
        "app": {
          "type": "ordinal",
          "n": 7,
          "pick": 2,
          "reverse": true
        },
        "hint": "先猜結果再操作，將兩次發現對照記在工作紙。"
      },
      {
        "id": "p1-w12-verify",
        "phase": 3,
        "kind": "primary",
        "title": "用圖或實物再查一次",
        "prompt": "從前的名次加從後的名次，和總數比一比。哪張卡被數了兩次？",
        "sec": "12-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第12週｜4 數學驗證",
        "app": {
          "type": "ordinal",
          "n": 7,
          "pick": 4
        },
        "hint": "先自己核對，再按「看看數據與核對」；畫面不是答案唯一來源。"
      },
      {
        "id": "p1-w12-practice1",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 1：先做，再核對",
        "prompt": "1. 5 隻小鴨排隊，小黃鴨排在第 2 個，小黃鴨後面有 (   ) 隻小鴨。",
        "sec": "12-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第12週｜4 數學驗證",
        "reveals": [
          "先指出題目已知甚麼、要找甚麼。",
          "核對：5−2＝3隻在後面。",
          "請用剛才的教具或紙上畫圖說明，別只報答案。"
        ]
      },
      {
        "id": "p1-w12-practice2",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 2：你的證據在哪裡？",
        "prompt": "2. 小朋友排隊，從前往後數小明是第 4 個，從後往前數小明是第 3 個，這一隊一共有 (   ) 人。",
        "sec": "12-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第12週｜4 數學驗證",
        "reveals": [
          "先畫出或擺出數量關係，再計算。",
          "核對：4＋3−1＝6人，中間的人數了兩次。",
          "換一種方法再查，看看兩次是否相同。"
        ]
      },
      {
        "id": "p1-w12-explain",
        "phase": 4,
        "kind": "p1-talk",
        "title": "指著證據，說給同伴聽",
        "prompt": "「第幾」和「幾個」有甚麼不同？用卡片指出來。",
        "sec": "12-5",
        "secName": "解釋發現",
        "theme": "violet",
        "worksheet": "第12週｜5 解釋發現",
        "reveals": [
          "先說「我發現……」，再指向實物或圖。",
          "請同伴問「你怎樣知道？」或「換一個例子呢？」。"
        ]
      },
      {
        "id": "p1-w12-apply",
        "phase": 5,
        "kind": "primary",
        "title": "把方法用在生活裡",
        "prompt": "你從前排第4、從後排第3。畫隊伍查總人數，向同伴解釋。",
        "sec": "12-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第12週｜6 生活應用",
        "app": {
          "type": "ordinal",
          "n": 6,
          "pick": 4
        },
        "hint": "畫面是幫助思考的教具，正式答案與理由寫在工作紙。"
      },
      {
        "id": "p1-w12-challenge",
        "phase": 5,
        "kind": "p1-talk",
        "title": "再想一步：能找到反例嗎？",
        "prompt": "從前第4、從後第3，為甚麼不能直接說7人？指出哪個人重複了。",
        "sec": "12-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第12週｜6 生活應用",
        "reveals": [
          "先只改一個條件，試兩個小例子。",
          "如果發現不一樣，說清楚原來的說法在哪個條件下才成立。"
        ]
      }
    ]
  }
];
