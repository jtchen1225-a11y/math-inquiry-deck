window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week01", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第01週 乘法可以怎樣分組",
    "color": "#126b9b",
    "sections": [
      "01-1 生活疑問",
      "01-2 大膽猜測",
      "01-3 動手探究",
      "01-4 數學驗證",
      "01-5 解釋發現",
      "01-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w01-life",
        "phase": 0,
        "kind": "question",
        "title": "乘法可以怎樣分組",
        "prompt": "點心每袋3件，每盒4袋，買2盒。先數袋數或先數每盒件數，總數會不同嗎？",
        "sec": "01-1",
        "secName": "生活疑問",
        "theme": "citrus",
        "worksheet": "第01週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第1至2課 乘法結合性質及分配性質 第4至9頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w01-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我想先算甚麼？另一種分組會不會改變總數？",
        "sec": "01-2",
        "secName": "大膽猜測",
        "theme": "teal",
        "worksheet": "第01週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w01-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：2盒每盒4袋每袋3件",
        "prompt": "點心每袋3件，每盒4袋，買2盒。先數袋數或先數每盒件數，總數會不同嗎？",
        "sec": "01-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第01週｜3 動手探究",
        "app": {
          "type": "grouping",
          "a": 3,
          "b": 4,
          "c": 2,
          "cases": [
            {
              "label": "2盒，每盒4袋，每袋3件",
              "values": {
                "a": 3,
                "b": 4,
                "c": 2
              }
            },
            {
              "label": "改每盒5袋",
              "values": {
                "a": 3,
                "b": 5,
                "c": 2
              }
            },
            {
              "label": "4排×18粒，拆10和8",
              "values": {
                "type": "area-multiply",
                "a": 18,
                "b": 4
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 用棋子按盒、袋分組",
          "2. 交換先算的兩步，分別記錄",
          "3. 把每盒改成5袋，再試一次。"
        ]
      },
      {
        "id": "p3-w01-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "2盒每盒5袋每袋3件",
        "sec": "01-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第01週｜3 動手探究",
        "app": {
          "type": "grouping",
          "a": 3,
          "b": 5,
          "c": 2,
          "cases": [
            {
              "label": "2盒，每盒4袋，每袋3件",
              "values": {
                "a": 3,
                "b": 4,
                "c": 2
              }
            },
            {
              "label": "改每盒5袋",
              "values": {
                "a": 3,
                "b": 5,
                "c": 2
              }
            },
            {
              "label": "4排×18粒，拆10和8",
              "values": {
                "type": "area-multiply",
                "a": 18,
                "b": 4
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w01-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "4排每排18粒，拆成兩部分",
        "sec": "01-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第01週｜3 動手探究",
        "app": {
          "type": "area-multiply",
          "a": 18,
          "b": 4,
          "c": 2,
          "cases": [
            {
              "label": "2盒，每盒4袋，每袋3件",
              "values": {
                "a": 3,
                "b": 4,
                "c": 2
              }
            },
            {
              "label": "改每盒5袋",
              "values": {
                "a": 3,
                "b": 5,
                "c": 2
              }
            },
            {
              "label": "4排×18粒，拆10和8",
              "values": {
                "type": "area-multiply",
                "a": 18,
                "b": 4
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w01-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "01-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第01週｜4 數學驗證",
        "app": {
          "type": "grouping",
          "a": 3,
          "b": 4,
          "c": 2,
          "cases": [
            {
              "label": "2盒，每盒4袋，每袋3件",
              "values": {
                "a": 3,
                "b": 4,
                "c": 2
              }
            },
            {
              "label": "改每盒5袋",
              "values": {
                "a": 3,
                "b": 5,
                "c": 2
              }
            },
            {
              "label": "4排×18粒，拆10和8",
              "values": {
                "type": "area-multiply",
                "a": 18,
                "b": 4
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "先遮住核對結果，用第二種方法重做。",
          "指出兩種方法用了哪一個共同的數量關係。"
        ]
      },
      {
        "id": "p3-w01-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "不用先求得數，補完整並以分組圖核對：(2×4)×3=2×(□×3)。",
        "sec": "01-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第01週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：□＝4，兩種分組都是24件。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w01-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "每排18粒共4排。把18拆成10和8，寫兩部分的乘積及總數。",
        "sec": "01-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第01週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：4×10＝40，4×8＝32，合共72粒。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w01-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "改變分組與改變總數有甚麼不同？用本頁的一個例子解釋。",
        "sec": "01-5",
        "secName": "解釋發現",
        "theme": "lime",
        "worksheet": "第01週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w01-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "有人把(2×4)×3改成2×(4＋3)。找出哪一步改變了物件數，畫出反例。",
        "sec": "01-5",
        "secName": "解釋發現",
        "theme": "lime",
        "worksheet": "第01週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w01-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "班上要準備3箱禮物，每箱5包，每包6件。寫兩種算法，並說哪種較容易心算。",
        "sec": "01-6",
        "secName": "生活應用",
        "theme": "coral",
        "worksheet": "第01週｜6 生活應用",
        "app": {
          "type": "grouping",
          "c": 3,
          "b": 5,
          "a": 6
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w01-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "01-6",
        "secName": "生活應用",
        "theme": "coral",
        "worksheet": "第01週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
