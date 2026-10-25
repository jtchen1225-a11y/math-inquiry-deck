window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week15", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第15週 班級市集怎樣安排",
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
        "id": "p3-w15-life",
        "phase": 0,
        "kind": "question",
        "title": "班級市集怎樣安排",
        "prompt": "班級市集有48人，每6人一組；每組買3包物料，每包12元。有人只算組數就說費用夠，還缺甚麼資料？",
        "sec": "15-1",
        "secName": "生活疑問",
        "theme": "citrus",
        "worksheet": "第15週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 總複習1及思維訓練1至2 第102至107頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w15-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "200元預算夠嗎？我需要先找哪個數量？",
        "sec": "15-2",
        "secName": "大膽猜測",
        "theme": "teal",
        "worksheet": "第15週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w15-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：48人每6人一組",
        "prompt": "班級市集有48人，每6人一組；每組買3包物料，每包12元。有人只算組數就說費用夠，還缺甚麼資料？",
        "sec": "15-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第15週｜3 動手探究",
        "app": {
          "type": "market",
          "a": 12,
          "b": 3,
          "d": 6,
          "cases": [
            {
              "label": "每6人一組",
              "values": {
                "d": 6
              }
            },
            {
              "label": "每8人一組",
              "values": {
                "d": 8
              }
            },
            {
              "label": "每4人一組",
              "values": {
                "d": 4
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 畫人數、組數、物料包數之間的關係",
          "2. 逐步求需要量與費用",
          "3. 用另一種分組次序驗算，標每一步單位。"
        ]
      },
      {
        "id": "p3-w15-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "每組3包每包12元",
        "sec": "15-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第15週｜3 動手探究",
        "app": {
          "type": "market",
          "a": 12,
          "b": 3,
          "d": 8,
          "cases": [
            {
              "label": "每6人一組",
              "values": {
                "d": 6
              }
            },
            {
              "label": "每8人一組",
              "values": {
                "d": 8
              }
            },
            {
              "label": "每4人一組",
              "values": {
                "d": 4
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w15-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "預算200元是否足夠",
        "sec": "15-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第15週｜3 動手探究",
        "app": {
          "type": "market",
          "a": 12,
          "b": 3,
          "d": 4,
          "cases": [
            {
              "label": "每6人一組",
              "values": {
                "d": 6
              }
            },
            {
              "label": "每8人一組",
              "values": {
                "d": 8
              }
            },
            {
              "label": "每4人一組",
              "values": {
                "d": 4
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w15-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "15-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第15週｜4 數學驗證",
        "app": {
          "type": "market",
          "a": 12,
          "b": 3,
          "d": 6,
          "cases": [
            {
              "label": "每6人一組",
              "values": {
                "d": 6
              }
            },
            {
              "label": "每8人一組",
              "values": {
                "d": 8
              }
            },
            {
              "label": "每4人一組",
              "values": {
                "d": 4
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
        "id": "p3-w15-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "若改為每8人一組，每組仍3包物料，每包12元。總費用多少？",
        "sec": "15-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第15週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：48÷8×3×12＝216元。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w15-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "市集9時20分開始，整理場地需35分鐘。最遲何時開始整理才能準時開場？",
        "sec": "15-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第15週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：9:20往前35分鐘是8:45。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w15-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "哪項資料改變會影響費用？改變開始時刻一定影響物料費嗎？解釋。",
        "sec": "15-5",
        "secName": "解釋發現",
        "theme": "lime",
        "worksheet": "第15週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w15-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "只把開場9:20改為9:40，組數、包數和單價不改，費用會變嗎？畫依存箭頭。",
        "sec": "15-5",
        "secName": "解釋發現",
        "theme": "lime",
        "worksheet": "第15週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w15-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "重新設計分組，48人平均分，每組4、6或8人，物料規定不變。比較三種費用，寫給班長的建議與理由。",
        "sec": "15-6",
        "secName": "生活應用",
        "theme": "coral",
        "worksheet": "第15週｜6 生活應用",
        "app": {
          "type": "market",
          "a": 12,
          "b": 3,
          "d": 6,
          "cases": [
            {
              "label": "每6人一組",
              "values": {
                "d": 6
              }
            },
            {
              "label": "每8人一組",
              "values": {
                "d": 8
              }
            },
            {
              "label": "每4人一組",
              "values": {
                "d": 4
              }
            }
          ]
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w15-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "15-6",
        "secName": "生活應用",
        "theme": "coral",
        "worksheet": "第15週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
