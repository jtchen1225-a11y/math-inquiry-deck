window.DECK_CONFIG={"mode": "inquiry", "id": "p1-week07", "version": 3, "ageBand": "p1", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第07週 減法多重意義",
    "color": "#126b9b",
    "sections": [
      "07-1 生活疑問",
      "07-2 大膽猜測",
      "07-3 動手探究",
      "07-4 數學驗證",
      "07-5 解釋發現",
      "07-6 生活應用"
    ],
    "slides": [
      {
        "id": "p1-w07-life",
        "phase": 0,
        "kind": "question",
        "title": "減法多重意義",
        "prompt": "魚缸有5條魚，拿走2條後還有多少？若剩下的也拿走，要怎樣記錄？",
        "sec": "07-1",
        "secName": "生活疑問",
        "theme": "citrus",
        "worksheet": "第07週｜1 生活疑問",
        "choices": [
          "還有物件",
          "全部拿走是0",
          "先實際拿走"
        ],
        "context": {
          "icon": "🐟",
          "label": "減法多重意義"
        },
        "hint": "先指一指、猜一猜；老師可朗讀，不急著公布答案。"
      },
      {
        "id": "p1-w07-guess",
        "phase": 1,
        "kind": "question",
        "title": "先說你的猜想，怎樣查？",
        "prompt": "我猜全部拿走後，可以用___表示。",
        "sec": "07-2",
        "secName": "大膽猜測",
        "theme": "ocean",
        "worksheet": "第07週｜2 大膽猜測",
        "choices": [
          "還有物件",
          "全部拿走是0",
          "先實際拿走"
        ],
        "context": {
          "icon": "🐟",
          "label": "減法多重意義"
        },
        "hint": "可以畫、擺或口述；猜錯後有證據就能修改。"
      },
      {
        "id": "p1-w07-explore",
        "phase": 2,
        "kind": "primary",
        "title": "拿走、剩下、相差，分別指甚麼？",
        "prompt": "材料：圓片、紙盤",
        "sec": "07-3",
        "secName": "動手探究",
        "theme": "teal",
        "worksheet": "第07週｜3 動手探究",
        "app": {
          "type": "subtract",
          "n": 5,
          "take": 2
        },
        "instructions": [
          "1. 放5塊圓片，拿走2塊。",
          "2. 把剩下的全部拿走，再記錄。",
          "3. 重新放4塊，一塊也不拿，看看剩多少。"
        ]
      },
      {
        "id": "p1-w07-compare",
        "phase": 2,
        "kind": "primary",
        "title": "換個例子，還一樣嗎？",
        "prompt": "輪流操作第二個情況。指出哪個條件改了、哪個沒有改。",
        "sec": "07-3",
        "secName": "動手探究",
        "theme": "teal",
        "worksheet": "第07週｜3 動手探究",
        "app": {
          "type": "subtract",
          "n": 5,
          "other": 3,
          "compare": true
        },
        "hint": "先猜結果再操作，將兩次發現對照記在工作紙。"
      },
      {
        "id": "p1-w07-verify",
        "phase": 3,
        "kind": "primary",
        "title": "用圖或實物再查一次",
        "prompt": "把原有5條和另一缸3條一一配對。相差多少？寫減法再檢查。",
        "sec": "07-4",
        "secName": "數學驗證",
        "theme": "violet",
        "worksheet": "第07週｜4 數學驗證",
        "app": {
          "type": "subtract",
          "n": 5,
          "take": 2
        },
        "hint": "先自己核對，再按「看看數據與核對」；畫面不是答案唯一來源。"
      },
      {
        "id": "p1-w07-practice1",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 1：先做，再核對",
        "prompt": "1. 算一算：7 - 0 = (   )，8 - 8 = (   )。",
        "sec": "07-4",
        "secName": "數學驗證",
        "theme": "violet",
        "worksheet": "第07週｜4 數學驗證",
        "reveals": [
          "先指出題目已知甚麼、要找甚麼。",
          "核對：7−0＝7；8−8＝0。",
          "請用剛才的教具或紙上畫圖說明，別只報答案。"
        ]
      },
      {
        "id": "p1-w07-practice2",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 2：你的證據在哪裡？",
        "prompt": "2. 樹上有 9 隻小鳥，飛走了 4 隻，樹上還剩下 (   ) 隻小鳥。",
        "sec": "07-4",
        "secName": "數學驗證",
        "theme": "violet",
        "worksheet": "第07週｜4 數學驗證",
        "reveals": [
          "先畫出或擺出數量關係，再計算。",
          "核對：9−4＝5隻小鳥。",
          "換一種方法再查，看看兩次是否相同。"
        ]
      },
      {
        "id": "p1-w07-explain",
        "phase": 4,
        "kind": "p1-talk",
        "title": "指著證據，說給同伴聽",
        "prompt": "「拿走多少」和「多多少」都能用減法表示嗎？拿實物說明。",
        "sec": "07-5",
        "secName": "解釋發現",
        "theme": "berry",
        "worksheet": "第07週｜5 解釋發現",
        "reveals": [
          "先說「我發現……」，再指向實物或圖。",
          "請同伴問「你怎樣知道？」或「換一個例子呢？」。"
        ]
      },
      {
        "id": "p1-w07-apply",
        "phase": 5,
        "kind": "primary",
        "title": "把方法用在生活裡",
        "prompt": "你有8塊積木，收起3塊，再收起2塊。桌上剩幾塊？畫或列式。",
        "sec": "07-6",
        "secName": "生活應用",
        "theme": "lime",
        "worksheet": "第07週｜6 生活應用",
        "app": {
          "type": "subtract",
          "n": 8,
          "take": 5
        },
        "hint": "畫面是幫助思考的教具，正式答案與理由寫在工作紙。"
      },
      {
        "id": "p1-w07-challenge",
        "phase": 5,
        "kind": "p1-talk",
        "title": "再想一步：能找到反例嗎？",
        "prompt": "8−0和8−8，兩個8代表的意思一樣嗎？用物件重演。",
        "sec": "07-6",
        "secName": "生活應用",
        "theme": "lime",
        "worksheet": "第07週｜6 生活應用",
        "reveals": [
          "先只改一個條件，試兩個小例子。",
          "如果發現不一樣，說清楚原來的說法在哪個條件下才成立。"
        ]
      }
    ]
  }
];
