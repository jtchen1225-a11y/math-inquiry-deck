window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week10", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第10週 四邊形的判斷證據",
    "color": "#126b9b",
    "sections": [
      "10-1 生活疑問",
      "10-2 大膽猜測",
      "10-3 動手探究",
      "10-4 數學驗證",
      "10-5 解釋發現",
      "10-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w10-life",
        "phase": 0,
        "kind": "question",
        "title": "四邊形的判斷證據",
        "prompt": "一張長方形卡斜放，看起來像歪了，還是長方形嗎？四邊同長就一定是正方形嗎？",
        "sec": "10-1",
        "secName": "生活疑問",
        "theme": "violet",
        "worksheet": "第10週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第17課 正方形和長方形 第78至80頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w10-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我認為要檢查哪些邊與角？",
        "sec": "10-2",
        "secName": "大膽猜測",
        "theme": "berry",
        "worksheet": "第10週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w10-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：長6厘米闊3厘米",
        "prompt": "一張長方形卡斜放，看起來像歪了，還是長方形嗎？四邊同長就一定是正方形嗎？",
        "sec": "10-3",
        "secName": "動手探究",
        "theme": "lime",
        "worksheet": "第10週｜3 動手探究",
        "app": {
          "type": "quad",
          "cases": [
            {
              "label": "6×3長方形",
              "values": {
                "mode": 0
              }
            },
            {
              "label": "邊長4正方形",
              "values": {
                "mode": 1
              }
            },
            {
              "label": "四邊同長但無直角",
              "values": {
                "mode": 2
              }
            }
          ],
          "mode": 0,
          "caseIndex": 0
        },
        "instructions": [
          "1. 畫長方形、正方形及一個四邊同長但無直角的圖",
          "2. 量邊並用紙角查四個角",
          "3. 轉動紙張後再次分類。"
        ]
      },
      {
        "id": "p3-w10-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "邊長4厘米",
        "sec": "10-3",
        "secName": "動手探究",
        "theme": "lime",
        "worksheet": "第10週｜3 動手探究",
        "app": {
          "type": "quad",
          "cases": [
            {
              "label": "6×3長方形",
              "values": {
                "mode": 0
              }
            },
            {
              "label": "邊長4正方形",
              "values": {
                "mode": 1
              }
            },
            {
              "label": "四邊同長但無直角",
              "values": {
                "mode": 2
              }
            }
          ],
          "mode": 1,
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w10-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "四邊同長但沒有直角",
        "sec": "10-3",
        "secName": "動手探究",
        "theme": "lime",
        "worksheet": "第10週｜3 動手探究",
        "app": {
          "type": "quad",
          "cases": [
            {
              "label": "6×3長方形",
              "values": {
                "mode": 0
              }
            },
            {
              "label": "邊長4正方形",
              "values": {
                "mode": 1
              }
            },
            {
              "label": "四邊同長但無直角",
              "values": {
                "mode": 2
              }
            }
          ],
          "mode": 2,
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w10-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "10-4",
        "secName": "數學驗證",
        "theme": "coral",
        "worksheet": "第10週｜4 數學驗證",
        "app": {
          "type": "quad",
          "cases": [
            {
              "label": "6×3長方形",
              "values": {
                "mode": 0
              }
            },
            {
              "label": "邊長4正方形",
              "values": {
                "mode": 1
              }
            },
            {
              "label": "四邊同長但無直角",
              "values": {
                "mode": 2
              }
            }
          ],
          "mode": 0,
          "caseIndex": 0
        },
        "instructions": [
          "先遮住核對結果，用第二種方法重做。",
          "指出兩種方法用了哪一個共同的數量關係。"
        ]
      },
      {
        "id": "p3-w10-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "小明只量一條邊就斷定是正方形。還要查甚麼？列出檢查次序。",
        "sec": "10-4",
        "secName": "數學驗證",
        "theme": "coral",
        "worksheet": "第10週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：要量四條邊並檢查四個角；四邊等長且四個直角才是正方形。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w10-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "正方形符合長方形的四個角都是直角、對邊相等的條件嗎？用圖說明。",
        "sec": "10-4",
        "secName": "數學驗證",
        "theme": "coral",
        "worksheet": "第10週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：符合；按四個直角、對邊相等的定義，正方形也是特殊長方形。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w10-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "為甚麼只看斜不斜或只看邊長，可能分錯類？",
        "sec": "10-5",
        "secName": "解釋發現",
        "theme": "ocean",
        "worksheet": "第10週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w10-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "四邊同長卻沒有直角的紙卡，為甚麼是「四邊同長必是正方形」的反例？",
        "sec": "10-5",
        "secName": "解釋發現",
        "theme": "ocean",
        "worksheet": "第10週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w10-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "設計一個驗貨方法，分辨長方形相框與正方形相框。寫明工具、要量的地方與合格條件。",
        "sec": "10-6",
        "secName": "生活應用",
        "theme": "citrus",
        "worksheet": "第10週｜6 生活應用",
        "app": {
          "type": "quad",
          "cases": [
            {
              "label": "6×3長方形",
              "values": {
                "mode": 0
              }
            },
            {
              "label": "邊長4正方形",
              "values": {
                "mode": 1
              }
            },
            {
              "label": "四邊同長但無直角",
              "values": {
                "mode": 2
              }
            }
          ]
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w10-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "10-6",
        "secName": "生活應用",
        "theme": "citrus",
        "worksheet": "第10週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
