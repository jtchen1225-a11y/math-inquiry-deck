window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week27", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第27週 看見的格數就是積木數嗎",
    "color": "#126b9b",
    "sections": [
      "27-1 生活疑問",
      "27-2 大膽猜測",
      "27-3 動手探究",
      "27-4 數學驗證",
      "27-5 解釋發現",
      "27-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w27-life",
        "phase": 0,
        "kind": "question",
        "title": "看見的格數就是積木數嗎",
        "prompt": "用積木排成前排兩個位置、後排左邊一個位置。從前面只看見兩格，就能斷定共有兩個積木嗎？",
        "sec": "27-1",
        "secName": "生活疑問",
        "theme": "coral",
        "worksheet": "第27週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "下冊 第40課 觀察物體 第68至70頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w27-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "哪些積木可能被遮住？從上面看又能知道甚麼？",
        "sec": "27-2",
        "secName": "大膽猜測",
        "theme": "ocean",
        "worksheet": "第27週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w27-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：原來3個積木",
        "prompt": "用積木排成前排兩個位置、後排左邊一個位置。從前面只看見兩格，就能斷定共有兩個積木嗎？",
        "sec": "27-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第27週｜3 動手探究",
        "app": {
          "type": "blocks",
          "heights": [
            1,
            1,
            1,
            0
          ],
          "cases": [
            {
              "label": "原來3個積木",
              "values": {
                "heights": [
                  1,
                  1,
                  1,
                  0
                ]
              }
            },
            {
              "label": "後左再疊1個",
              "values": {
                "heights": [
                  1,
                  1,
                  2,
                  0
                ]
              }
            },
            {
              "label": "把新增1個移到前右",
              "values": {
                "heights": [
                  1,
                  2,
                  1,
                  0
                ]
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 用3個相同積木按題意擺好，先畫俯視位置",
          "2. 從前、側、上面各畫看見的形狀",
          "3. 在後左位置再疊1個，比較三個視圖怎樣改變。"
        ]
      },
      {
        "id": "p3-w27-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "後左位置再疊1個",
        "sec": "27-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第27週｜3 動手探究",
        "app": {
          "type": "blocks",
          "heights": [
            1,
            1,
            2,
            0
          ],
          "cases": [
            {
              "label": "原來3個積木",
              "values": {
                "heights": [
                  1,
                  1,
                  1,
                  0
                ]
              }
            },
            {
              "label": "後左再疊1個",
              "values": {
                "heights": [
                  1,
                  1,
                  2,
                  0
                ]
              }
            },
            {
              "label": "把新增1個移到前右",
              "values": {
                "heights": [
                  1,
                  2,
                  1,
                  0
                ]
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w27-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "把增加的1個移到前右上面",
        "sec": "27-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第27週｜3 動手探究",
        "app": {
          "type": "blocks",
          "heights": [
            1,
            2,
            1,
            0
          ],
          "cases": [
            {
              "label": "原來3個積木",
              "values": {
                "heights": [
                  1,
                  1,
                  1,
                  0
                ]
              }
            },
            {
              "label": "後左再疊1個",
              "values": {
                "heights": [
                  1,
                  1,
                  2,
                  0
                ]
              }
            },
            {
              "label": "把新增1個移到前右",
              "values": {
                "heights": [
                  1,
                  2,
                  1,
                  0
                ]
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w27-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "27-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第27週｜4 數學驗證",
        "app": {
          "type": "blocks",
          "heights": [
            1,
            1,
            1,
            0
          ],
          "cases": [
            {
              "label": "原來3個積木",
              "values": {
                "heights": [
                  1,
                  1,
                  1,
                  0
                ]
              }
            },
            {
              "label": "後左再疊1個",
              "values": {
                "heights": [
                  1,
                  1,
                  2,
                  0
                ]
              }
            },
            {
              "label": "把新增1個移到前右",
              "values": {
                "heights": [
                  1,
                  2,
                  1,
                  0
                ]
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
        "id": "p3-w27-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "用2個積木前後排成一線。從前面和上面各見甚麼形狀？畫圖說明。",
        "sec": "27-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第27週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：從前面只見一格，從上面見前後兩格。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w27-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "前面看是兩列且都高1格，最多能知道總積木數嗎？若未限制後排，請畫兩個數目不同的例子。",
        "sec": "27-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第27週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：不能唯一確定；前排兩個與前後各兩個，前視圖相同但總數2與4。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w27-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "某一面看到的圖，不能直接當作總積木數，原因是甚麼？",
        "sec": "27-5",
        "secName": "解釋發現",
        "theme": "violet",
        "worksheet": "第27週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w27-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "同一前視兩列高1，後面增加一排會改變前視嗎？建兩個不同總數的例子。",
        "sec": "27-5",
        "secName": "解釋發現",
        "theme": "violet",
        "worksheet": "第27週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w27-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "為同伴寫一張積木搭建指令：提供俯視位置及各位置層數。讓同伴重建，再比較只給一個視圖是否足夠。",
        "sec": "27-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第27週｜6 生活應用",
        "app": {
          "type": "blocks",
          "heights": [
            1,
            1,
            1,
            0
          ],
          "cases": [
            {
              "label": "原來3個積木",
              "values": {
                "heights": [
                  1,
                  1,
                  1,
                  0
                ]
              }
            },
            {
              "label": "後左再疊1個",
              "values": {
                "heights": [
                  1,
                  1,
                  2,
                  0
                ]
              }
            },
            {
              "label": "把新增1個移到前右",
              "values": {
                "heights": [
                  1,
                  2,
                  1,
                  0
                ]
              }
            }
          ]
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w27-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "27-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第27週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
