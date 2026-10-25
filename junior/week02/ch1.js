window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week02", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第02週 乘法進位到哪一位",
    "color": "#126b9b",
    "sections": [
      "02-1 生活疑問",
      "02-2 大膽猜測",
      "02-3 動手探究",
      "02-4 數學驗證",
      "02-5 解釋發現",
      "02-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w02-life",
        "phase": 0,
        "kind": "question",
        "title": "乘法進位到哪一位",
        "prompt": "每包貼紙24張，買3包。小明算個位後要進1，這個1代表甚麼？",
        "sec": "02-1",
        "secName": "生活疑問",
        "theme": "teal",
        "worksheet": "第02週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第3至5課 兩位數及三位數與一位數的乘法 第10至23頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w02-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "積大約有多少？進位的1應放在哪個數位？",
        "sec": "02-2",
        "secName": "大膽猜測",
        "theme": "violet",
        "worksheet": "第02週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w02-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：24×3",
        "prompt": "每包貼紙24張，買3包。小明算個位後要進1，這個1代表甚麼？",
        "sec": "02-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第02週｜3 動手探究",
        "app": {
          "type": "multiply",
          "a": 24,
          "b": 3,
          "cases": [
            {
              "label": "24×3",
              "values": {
                "a": 24,
                "b": 3
              }
            },
            {
              "label": "206×4",
              "values": {
                "a": 206,
                "b": 4
              }
            },
            {
              "label": "158×6",
              "values": {
                "a": 158,
                "b": 6
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 用十位、個位圖表示24，取3份",
          "2. 把滿十個一換成一個十，連到直式",
          "3. 再試206和三位數的連續進位。"
        ]
      },
      {
        "id": "p3-w02-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "206×4",
        "sec": "02-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第02週｜3 動手探究",
        "app": {
          "type": "multiply",
          "a": 206,
          "b": 4,
          "cases": [
            {
              "label": "24×3",
              "values": {
                "a": 24,
                "b": 3
              }
            },
            {
              "label": "206×4",
              "values": {
                "a": 206,
                "b": 4
              }
            },
            {
              "label": "158×6",
              "values": {
                "a": 158,
                "b": 6
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w02-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "158×6",
        "sec": "02-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第02週｜3 動手探究",
        "app": {
          "type": "multiply",
          "a": 158,
          "b": 6,
          "cases": [
            {
              "label": "24×3",
              "values": {
                "a": 24,
                "b": 3
              }
            },
            {
              "label": "206×4",
              "values": {
                "a": 206,
                "b": 4
              }
            },
            {
              "label": "158×6",
              "values": {
                "a": 158,
                "b": 6
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w02-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "02-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第02週｜4 數學驗證",
        "app": {
          "type": "multiply",
          "a": 24,
          "b": 3,
          "cases": [
            {
              "label": "24×3",
              "values": {
                "a": 24,
                "b": 3
              }
            },
            {
              "label": "206×4",
              "values": {
                "a": 206,
                "b": 4
              }
            },
            {
              "label": "158×6",
              "values": {
                "a": 158,
                "b": 6
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
        "id": "p3-w02-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "算306×5，寫出個位進位後，十位算的是哪兩部分。",
        "sec": "02-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第02週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：306×5＝1530。個位30換來3個十；十位算0×5＋3＝3個十。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w02-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "先把598看成600估算，再算598×4。比較估值與實值相差多少。",
        "sec": "02-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第02週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：600×4＝2400，598×4＝2392；估值多8。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w02-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "乘數中間有0，積的同一位一定也是0嗎？用算式支持你的判斷。",
        "sec": "02-5",
        "secName": "解釋發現",
        "theme": "coral",
        "worksheet": "第02週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w02-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "有人說「被乘數十位是0，積十位也一定是0」。用306×5反駁，說出進來的量。",
        "sec": "02-5",
        "secName": "解釋發現",
        "theme": "coral",
        "worksheet": "第02週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w02-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "每張戲票38元，6人買票，帶250元夠嗎？先估再精算，寫出判斷依據。",
        "sec": "02-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第02週｜6 生活應用",
        "app": {
          "type": "estimate",
          "a": 38,
          "b": 6,
          "target": 250
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w02-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "02-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第02週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
