window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week19", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第19週 同樣大就同樣重嗎",
    "color": "#126b9b",
    "sections": [
      "19-1 生活疑問",
      "19-2 大膽猜測",
      "19-3 動手探究",
      "19-4 數學驗證",
      "19-5 解釋發現",
      "19-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w19-life",
        "phase": 0,
        "kind": "question",
        "title": "同樣大就同樣重嗎",
        "prompt": "大海綿和小石頭，體積較大的一定較重嗎？只用手掂，怎樣查得更可靠？",
        "sec": "19-1",
        "secName": "生活疑問",
        "theme": "lime",
        "worksheet": "第19週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "下冊 第29課 認識重量 第19至21頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w19-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我預測哪件較重？我的判斷是看大小還是掂量？",
        "sec": "19-2",
        "secName": "大膽猜測",
        "theme": "coral",
        "worksheet": "第19週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w19-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：物件甲 自選",
        "prompt": "大海綿和小石頭，體積較大的一定較重嗎？只用手掂，怎樣查得更可靠？",
        "sec": "19-3",
        "secName": "動手探究",
        "theme": "ocean",
        "worksheet": "第19週｜3 動手探究",
        "app": {
          "type": "mass",
          "n": 3,
          "cases": [
            {
              "label": "天平兩邊平衡",
              "values": {
                "n": 3
              }
            },
            {
              "label": "右邊移去1砝碼",
              "values": {
                "n": 2
              }
            },
            {
              "label": "只改模型外觀",
              "values": {
                "n": 3,
                "alternate": true
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 選三件安全小物，先按估計重量排序",
          "2. 用天平或電子磅逐件比較",
          "3. 記錄測量值，重新排序並說明修正。"
        ]
      },
      {
        "id": "p3-w19-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "物件乙 自選",
        "sec": "19-3",
        "secName": "動手探究",
        "theme": "ocean",
        "worksheet": "第19週｜3 動手探究",
        "app": {
          "type": "mass",
          "n": 2,
          "cases": [
            {
              "label": "天平兩邊平衡",
              "values": {
                "n": 3
              }
            },
            {
              "label": "右邊移去1砝碼",
              "values": {
                "n": 2
              }
            },
            {
              "label": "只改模型外觀",
              "values": {
                "n": 3,
                "alternate": true
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w19-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "物件丙 自選",
        "sec": "19-3",
        "secName": "動手探究",
        "theme": "ocean",
        "worksheet": "第19週｜3 動手探究",
        "app": {
          "type": "mass",
          "n": 3,
          "cases": [
            {
              "label": "天平兩邊平衡",
              "values": {
                "n": 3
              }
            },
            {
              "label": "右邊移去1砝碼",
              "values": {
                "n": 2
              }
            },
            {
              "label": "只改模型外觀",
              "values": {
                "n": 3,
                "alternate": true
              }
            }
          ],
          "alternate": true,
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w19-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "19-4",
        "secName": "數學驗證",
        "theme": "citrus",
        "worksheet": "第19週｜4 數學驗證",
        "app": {
          "type": "mass",
          "n": 3,
          "cases": [
            {
              "label": "天平兩邊平衡",
              "values": {
                "n": 3
              }
            },
            {
              "label": "右邊移去1砝碼",
              "values": {
                "n": 2
              }
            },
            {
              "label": "只改模型外觀",
              "values": {
                "n": 3,
                "alternate": true
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
        "id": "p3-w19-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "兩邊天平平衡，左邊一本簿，右邊3個相同砝碼。若移去右邊1個砝碼，哪邊下降？畫圖。",
        "sec": "19-4",
        "secName": "數學驗證",
        "theme": "citrus",
        "worksheet": "第19週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：左邊下降，因右邊移去砝碼後較輕。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w19-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "同一物件量兩次結果略有不同。提出一個要檢查的操作細節，並重新量一次。",
        "sec": "19-4",
        "secName": "數學驗證",
        "theme": "citrus",
        "worksheet": "第19週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：例如檢查有否歸零、放在水平穩固面、單位相同及物件完整放好，再重測；不得虛構數據。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w19-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "外觀大小與重量有甚麼不同？用實測的一對物件解釋。",
        "sec": "19-5",
        "secName": "解釋發現",
        "theme": "teal",
        "worksheet": "第19週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w19-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "大海綿一定比小石頭重嗎？先訂實測方法，證據不足時不要編造重量。",
        "sec": "19-5",
        "secName": "解釋發現",
        "theme": "teal",
        "worksheet": "第19週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w19-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "為班上圖書包訂一個比較輕重的方法：選三包，以同一工具比較，列次序，寫出量度時要一致的條件。",
        "sec": "19-6",
        "secName": "生活應用",
        "theme": "violet",
        "worksheet": "第19週｜6 生活應用",
        "app": {
          "type": "mass",
          "n": 3,
          "cases": [
            {
              "label": "天平兩邊平衡",
              "values": {
                "n": 3
              }
            },
            {
              "label": "右邊移去1砝碼",
              "values": {
                "n": 2
              }
            },
            {
              "label": "只改模型外觀",
              "values": {
                "n": 3,
                "alternate": true
              }
            }
          ]
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w19-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "19-6",
        "secName": "生活應用",
        "theme": "violet",
        "worksheet": "第19週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
