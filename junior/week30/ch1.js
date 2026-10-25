window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week30", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第30週 怎樣檢查可能性",
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
        "id": "p3-w30-life",
        "phase": 0,
        "kind": "question",
        "title": "怎樣檢查可能性",
        "prompt": "袋中有3粒紅珠、1粒藍珠，每次摸1粒再放回。紅珠較多，是否保證下一次一定摸到紅珠？",
        "sec": "30-1",
        "secName": "生活疑問",
        "theme": "teal",
        "worksheet": "第30週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "下冊 第46課 可能性 第93至96頁 總複習2及思維訓練3至4 第102至109頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w30-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我猜紅、藍哪色較容易摸到？有沒有不可能摸到的顏色？",
        "sec": "30-2",
        "secName": "大膽猜測",
        "theme": "violet",
        "worksheet": "第30週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w30-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：紅珠出現次數",
        "prompt": "袋中有3粒紅珠、1粒藍珠，每次摸1粒再放回。紅珠較多，是否保證下一次一定摸到紅珠？",
        "sec": "30-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第30週｜3 動手探究",
        "app": {
          "type": "chance",
          "red": 3,
          "blue": 1,
          "cases": [
            {
              "label": "原袋3紅1藍",
              "values": {
                "red": 3,
                "blue": 1
              }
            },
            {
              "label": "8粒配方：5紅3藍",
              "values": {
                "red": 5,
                "blue": 3
              }
            },
            {
              "label": "8粒配方：6紅2藍",
              "values": {
                "red": 6,
                "blue": 2
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 用不透明袋和同樣大小的珠子，摸後放回並搖勻",
          "2. 兩人輪流試20次，逐次記結果",
          "3. 統計兩色次數，與原來猜測比較，討論不同組是否可能不同。"
        ]
      },
      {
        "id": "p3-w30-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "藍珠出現次數",
        "sec": "30-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第30週｜3 動手探究",
        "app": {
          "type": "chance",
          "red": 5,
          "blue": 3,
          "cases": [
            {
              "label": "原袋3紅1藍",
              "values": {
                "red": 3,
                "blue": 1
              }
            },
            {
              "label": "8粒配方：5紅3藍",
              "values": {
                "red": 5,
                "blue": 3
              }
            },
            {
              "label": "8粒配方：6紅2藍",
              "values": {
                "red": 6,
                "blue": 2
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w30-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "兩色合計及有沒有其他顏色",
        "sec": "30-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第30週｜3 動手探究",
        "app": {
          "type": "chance",
          "red": 6,
          "blue": 2,
          "cases": [
            {
              "label": "原袋3紅1藍",
              "values": {
                "red": 3,
                "blue": 1
              }
            },
            {
              "label": "8粒配方：5紅3藍",
              "values": {
                "red": 5,
                "blue": 3
              }
            },
            {
              "label": "8粒配方：6紅2藍",
              "values": {
                "red": 6,
                "blue": 2
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w30-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "30-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第30週｜4 數學驗證",
        "app": {
          "type": "chance",
          "red": 3,
          "blue": 1,
          "cases": [
            {
              "label": "原袋3紅1藍",
              "values": {
                "red": 3,
                "blue": 1
              }
            },
            {
              "label": "8粒配方：5紅3藍",
              "values": {
                "red": 5,
                "blue": 3
              }
            },
            {
              "label": "8粒配方：6紅2藍",
              "values": {
                "red": 6,
                "blue": 2
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
        "id": "p3-w30-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "袋內只有紅、藍兩色，摸到綠色是一定、可能還是不可能？摸到紅色呢？分別說依據。",
        "sec": "30-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第30週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：綠色不可能，因袋中沒有；紅色可能，因有紅珠但也有藍珠。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w30-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "若另一組20次摸到紅珠較少，能立即斷定袋中紅珠也較少嗎？提出再檢查的方法。",
        "sec": "30-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第30週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：不能立即斷定；先檢查配方、放回與搖勻規則，再重複多輪，比較更多次結果。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w30-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "較容易發生與一定發生有何分別？一次結果或20次結果能證明哪些事，不能保證哪些事？",
        "sec": "30-5",
        "secName": "解釋發現",
        "theme": "coral",
        "worksheet": "第30週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w30-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "3紅1藍中紅較易摸到，下一次就一定紅嗎？說出一個仍然可能的結果。",
        "sec": "30-5",
        "secName": "解釋發現",
        "theme": "coral",
        "worksheet": "第30週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w30-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "設計一袋摸珠遊戲，珠子共8粒，只用紅藍兩色且兩色都有，使紅色較容易摸到。列兩種配法，比較並說明遊戲規則。",
        "sec": "30-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第30週｜6 生活應用",
        "app": {
          "type": "chance",
          "red": 5,
          "blue": 3
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w30-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "30-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第30週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
