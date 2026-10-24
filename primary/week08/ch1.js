window.DECK_CONFIG={"mode": "inquiry", "id": "p1-week08", "version": 3, "ageBand": "p1", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第08週 等式平衡與神秘未知數",
    "color": "#126b9b",
    "sections": [
      "08-1 生活疑問",
      "08-2 大膽猜測",
      "08-3 動手探究",
      "08-4 數學驗證",
      "08-5 解釋發現",
      "08-6 生活應用"
    ],
    "slides": [
      {
        "id": "p1-w08-life",
        "phase": 0,
        "kind": "question",
        "title": "等式平衡與神秘未知數",
        "prompt": "左邊有4塊積木和一些藏起的積木，右邊有9塊。兩邊一樣多，藏了幾塊？",
        "sec": "08-1",
        "secName": "生活疑問",
        "theme": "ocean",
        "worksheet": "第08週｜1 生活疑問",
        "choices": [
          "猜藏了4塊",
          "猜藏了5塊",
          "想逐塊補上"
        ],
        "context": {
          "icon": "⚖️",
          "label": "等式平衡與神秘未知數"
        },
        "hint": "先指一指、猜一猜；老師可朗讀，不急著公布答案。"
      },
      {
        "id": "p1-w08-guess",
        "phase": 1,
        "kind": "question",
        "title": "先說你的猜想，怎樣查？",
        "prompt": "我先猜藏了___塊。",
        "sec": "08-2",
        "secName": "大膽猜測",
        "theme": "teal",
        "worksheet": "第08週｜2 大膽猜測",
        "choices": [
          "猜藏了4塊",
          "猜藏了5塊",
          "想逐塊補上"
        ],
        "context": {
          "icon": "⚖️",
          "label": "等式平衡與神秘未知數"
        },
        "hint": "可以畫、擺或口述；猜錯後有證據就能修改。"
      },
      {
        "id": "p1-w08-explore",
        "phase": 2,
        "kind": "primary",
        "title": "等號是「兩邊一樣多」嗎？",
        "prompt": "材料：積木、紙杯、兩張紙墊",
        "sec": "08-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第08週｜3 動手探究",
        "app": {
          "type": "balance",
          "a": 4,
          "target": 9
        },
        "instructions": [
          "1. 一張紙擺9塊，另一張擺4塊。",
          "2. 逐塊補上，直到兩邊一樣多。",
          "3. 換6＋□＝10、□＋3＝8，再試。"
        ]
      },
      {
        "id": "p1-w08-compare",
        "phase": 2,
        "kind": "primary",
        "title": "換個例子，還一樣嗎？",
        "prompt": "輪流操作第二個情況。指出哪個條件改了、哪個沒有改。",
        "sec": "08-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第08週｜3 動手探究",
        "app": {
          "type": "balance",
          "a": 6,
          "target": 10
        },
        "hint": "先猜結果再操作，將兩次發現對照記在工作紙。"
      },
      {
        "id": "p1-w08-verify",
        "phase": 3,
        "kind": "primary",
        "title": "用圖或實物再查一次",
        "prompt": "把找到的數放回方框，算左右兩邊。也可用減法再查。",
        "sec": "08-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第08週｜4 數學驗證",
        "app": {
          "type": "balance",
          "a": 4,
          "target": 9
        },
        "hint": "先自己核對，再按「看看數據與核對」；畫面不是答案唯一來源。"
      },
      {
        "id": "p1-w08-practice1",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 1：先做，再核對",
        "prompt": "1. 在方框裡填上合適的數：3 + □ = 8，那麼 □ = (   )。",
        "sec": "08-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第08週｜4 數學驗證",
        "reveals": [
          "先指出題目已知甚麼、要找甚麼。",
          "核對：3＋5＝8，方框是5。",
          "請用剛才的教具或紙上畫圖說明，別只報答案。"
        ]
      },
      {
        "id": "p1-w08-practice2",
        "phase": 3,
        "kind": "task",
        "title": "基礎練習 2：你的證據在哪裡？",
        "prompt": "2. 左邊有7顆彈珠；右邊有2顆和盒內的彈珠。兩邊顆數相同，盒內有（   ）顆。",
        "sec": "08-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第08週｜4 數學驗證",
        "reveals": [
          "先畫出或擺出數量關係，再計算。",
          "核對：7−2＝5顆；2＋5＝7。",
          "換一種方法再查，看看兩次是否相同。"
        ]
      },
      {
        "id": "p1-w08-explain",
        "phase": 4,
        "kind": "p1-talk",
        "title": "指著證據，說給同伴聽",
        "prompt": "等號兩邊表示甚麼？為甚麼你的數放進去合適？",
        "sec": "08-5",
        "secName": "解釋發現",
        "theme": "lime",
        "worksheet": "第08週｜5 解釋發現",
        "reveals": [
          "先說「我發現……」，再指向實物或圖。",
          "請同伴問「你怎樣知道？」或「換一個例子呢？」。"
        ]
      },
      {
        "id": "p1-w08-apply",
        "phase": 5,
        "kind": "primary",
        "title": "把方法用在生活裡",
        "prompt": "一盒要放8支筆，已有3支。請同伴先猜還缺幾支，再擺出來查。",
        "sec": "08-6",
        "secName": "生活應用",
        "theme": "citrus",
        "worksheet": "第08週｜6 生活應用",
        "app": {
          "type": "balance",
          "a": 3,
          "target": 8
        },
        "hint": "畫面是幫助思考的教具，正式答案與理由寫在工作紙。"
      },
      {
        "id": "p1-w08-challenge",
        "phase": 5,
        "kind": "p1-talk",
        "title": "再想一步：能找到反例嗎？",
        "prompt": "把方框移到算式最前面，方法還能用嗎？試□＋3＝8，放回去核對。",
        "sec": "08-6",
        "secName": "生活應用",
        "theme": "citrus",
        "worksheet": "第08週｜6 生活應用",
        "reveals": [
          "先只改一個條件，試兩個小例子。",
          "如果發現不一樣，說清楚原來的說法在哪個條件下才成立。"
        ]
      }
    ]
  }
];
