window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week25", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第25週 分數比較先看整體",
    "color": "#126b9b",
    "sections": [
      "25-1 生活疑問",
      "25-2 大膽猜測",
      "25-3 動手探究",
      "25-4 數學驗證",
      "25-5 解釋發現",
      "25-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w25-life",
        "phase": 0,
        "kind": "question",
        "title": "分數比較先看整體",
        "prompt": "同樣大的點心，(1)/(4)與(1)/(6)哪份大？分母的數字大，分到的一份就大嗎？",
        "sec": "25-1",
        "secName": "生活疑問",
        "theme": "berry",
        "worksheet": "第25週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "下冊 第38課 比較分數的大小 第56至57頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w25-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我預測哪份大？如果整塊點心大小不同，還能直接這樣比嗎？",
        "sec": "25-2",
        "secName": "大膽猜測",
        "theme": "lime",
        "worksheet": "第25週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w25-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：(1)/(4)與(1)/(6)",
        "prompt": "同樣大的點心，(1)/(4)與(1)/(6)哪份大？分母的數字大，分到的一份就大嗎？",
        "sec": "25-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第25週｜3 動手探究",
        "app": {
          "type": "fraction-compare",
          "d": 4,
          "n": 1,
          "b": 6,
          "c": 1,
          "cases": [
            {
              "label": "1/4與1/6",
              "values": {
                "d": 4,
                "n": 1,
                "b": 6,
                "c": 1
              }
            },
            {
              "label": "2/5與3/5",
              "values": {
                "d": 5,
                "n": 2,
                "b": 5,
                "c": 3
              }
            },
            {
              "label": "2/3與2/5",
              "values": {
                "d": 3,
                "n": 2,
                "b": 5,
                "c": 2
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 畫同長紙條，分別平均分4份與6份",
          "2. 取同樣1份比較，再取同樣2份比較",
          "3. 用另一對同長紙條比較同分母的份數。"
        ]
      },
      {
        "id": "p3-w25-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "(2)/(5)與(3)/(5)",
        "sec": "25-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第25週｜3 動手探究",
        "app": {
          "type": "fraction-compare",
          "d": 5,
          "n": 2,
          "b": 5,
          "c": 3,
          "cases": [
            {
              "label": "1/4與1/6",
              "values": {
                "d": 4,
                "n": 1,
                "b": 6,
                "c": 1
              }
            },
            {
              "label": "2/5與3/5",
              "values": {
                "d": 5,
                "n": 2,
                "b": 5,
                "c": 3
              }
            },
            {
              "label": "2/3與2/5",
              "values": {
                "d": 3,
                "n": 2,
                "b": 5,
                "c": 2
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w25-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "(2)/(3)與(2)/(5)",
        "sec": "25-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第25週｜3 動手探究",
        "app": {
          "type": "fraction-compare",
          "d": 3,
          "n": 2,
          "b": 5,
          "c": 2,
          "cases": [
            {
              "label": "1/4與1/6",
              "values": {
                "d": 4,
                "n": 1,
                "b": 6,
                "c": 1
              }
            },
            {
              "label": "2/5與3/5",
              "values": {
                "d": 5,
                "n": 2,
                "b": 5,
                "c": 3
              }
            },
            {
              "label": "2/3與2/5",
              "values": {
                "d": 3,
                "n": 2,
                "b": 5,
                "c": 2
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w25-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "25-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第25週｜4 數學驗證",
        "app": {
          "type": "fraction-compare",
          "d": 4,
          "n": 1,
          "b": 6,
          "c": 1,
          "cases": [
            {
              "label": "1/4與1/6",
              "values": {
                "d": 4,
                "n": 1,
                "b": 6,
                "c": 1
              }
            },
            {
              "label": "2/5與3/5",
              "values": {
                "d": 5,
                "n": 2,
                "b": 5,
                "c": 3
              }
            },
            {
              "label": "2/3與2/5",
              "values": {
                "d": 3,
                "n": 2,
                "b": 5,
                "c": 2
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
        "id": "p3-w25-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "填＞或＜：(4)/(7)□(4)/(9)；(3)/(8)□(5)/(8)。各用一句話解釋。",
        "sec": "25-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第25週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：4/7＞4/9，同分子整體相同時分母小每份大；3/8＜5/8，同分母取份多較大。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w25-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "把(1)/(2)、(1)/(8)、(1)/(5)由小至大排列，畫同長紙條核對。",
        "sec": "25-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第25週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：1/8＜1/5＜1/2。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w25-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "同分母與同分子時，分別固定了甚麼？比較時要注意甚麼整體條件？",
        "sec": "25-5",
        "secName": "解釋發現",
        "theme": "citrus",
        "worksheet": "第25週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w25-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "甲取大紙條1/4、乙取小紙條1/3，誰實際較多一定能決定嗎？還缺哪個條件？",
        "sec": "25-5",
        "secName": "解釋發現",
        "theme": "citrus",
        "worksheet": "第25週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w25-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "同樣大的兩張彩紙，甲用去(2)/(3)，乙用去(2)/(5)。誰剩下較多？畫圖比較，再提出一個新的同分子問題。",
        "sec": "25-6",
        "secName": "生活應用",
        "theme": "teal",
        "worksheet": "第25週｜6 生活應用",
        "app": {
          "type": "fraction-compare",
          "d": 3,
          "n": 2,
          "b": 5,
          "c": 2
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w25-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "25-6",
        "secName": "生活應用",
        "theme": "teal",
        "worksheet": "第25週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
