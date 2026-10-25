window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week04", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第04週 小長度和大路程",
    "color": "#126b9b",
    "sections": [
      "04-1 生活疑問",
      "04-2 大膽猜測",
      "04-3 動手探究",
      "04-4 數學驗證",
      "04-5 解釋發現",
      "04-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w04-life",
        "phase": 0,
        "kind": "question",
        "title": "小長度和大路程",
        "prompt": "書本厚度和郊遊路程，為甚麼不都用厘米？尺的0刻度壞了，還能量長度嗎？",
        "sec": "04-1",
        "secName": "生活疑問",
        "theme": "berry",
        "worksheet": "第04週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第7至8課 認識毫米及認識千米 第27至34頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w04-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我會選甚麼單位？起點不在0時，應看終點還是兩端的差？",
        "sec": "04-2",
        "secName": "大膽猜測",
        "theme": "lime",
        "worksheet": "第04週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w04-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：尺上35至82毫米",
        "prompt": "書本厚度和郊遊路程，為甚麼不都用厘米？尺的0刻度壞了，還能量長度嗎？",
        "sec": "04-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第04週｜3 動手探究",
        "app": {
          "type": "ruler",
          "start": 35,
          "length": 47,
          "cases": [
            {
              "label": "35至82毫米",
              "values": {
                "start": 35,
                "length": 47
              }
            },
            {
              "label": "3厘米8毫米",
              "values": {
                "start": 0,
                "length": 38
              }
            },
            {
              "label": "2千米400米",
              "values": {
                "type": "length-unit",
                "a": 2,
                "b": 400
              }
            },
            {
              "label": "同長，改起點10毫米",
              "values": {
                "start": 10,
                "length": 47
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 在直尺上找1厘米內的毫米間隔",
          "2. 量同一支鉛筆，分別由0和10毫米起量",
          "3. 把模型路程化成同一單位比較。"
        ]
      },
      {
        "id": "p3-w04-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "3厘米8毫米",
        "sec": "04-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第04週｜3 動手探究",
        "app": {
          "type": "ruler",
          "start": 0,
          "length": 38,
          "cases": [
            {
              "label": "35至82毫米",
              "values": {
                "start": 35,
                "length": 47
              }
            },
            {
              "label": "3厘米8毫米",
              "values": {
                "start": 0,
                "length": 38
              }
            },
            {
              "label": "2千米400米",
              "values": {
                "type": "length-unit",
                "a": 2,
                "b": 400
              }
            },
            {
              "label": "同長，改起點10毫米",
              "values": {
                "start": 10,
                "length": 47
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w04-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "2千米400米",
        "sec": "04-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第04週｜3 動手探究",
        "app": {
          "type": "length-unit",
          "start": 35,
          "length": 47,
          "cases": [
            {
              "label": "35至82毫米",
              "values": {
                "start": 35,
                "length": 47
              }
            },
            {
              "label": "3厘米8毫米",
              "values": {
                "start": 0,
                "length": 38
              }
            },
            {
              "label": "2千米400米",
              "values": {
                "type": "length-unit",
                "a": 2,
                "b": 400
              }
            },
            {
              "label": "同長，改起點10毫米",
              "values": {
                "start": 10,
                "length": 47
              }
            }
          ],
          "a": 2,
          "b": 400,
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w04-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "04-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第04週｜4 數學驗證",
        "app": {
          "type": "ruler",
          "start": 35,
          "length": 47,
          "cases": [
            {
              "label": "35至82毫米",
              "values": {
                "start": 35,
                "length": 47
              }
            },
            {
              "label": "3厘米8毫米",
              "values": {
                "start": 0,
                "length": 38
              }
            },
            {
              "label": "2千米400米",
              "values": {
                "type": "length-unit",
                "a": 2,
                "b": 400
              }
            },
            {
              "label": "同長，改起點10毫米",
              "values": {
                "start": 10,
                "length": 47
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
        "id": "p3-w04-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "完成換算並寫依據：5厘米8毫米=□毫米；3千米=□米。",
        "sec": "04-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第04週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：58毫米；3000米。1厘米＝10毫米，1千米＝1000米。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w04-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "路跑全程10千米，已走6400米。還剩幾千米幾米？用線段圖核對。",
        "sec": "04-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第04週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：10000−6400＝3600米＝3千米600米。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w04-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "物件長度沒有變，尺上的終點數卻可以不同，原因是甚麼？",
        "sec": "04-5",
        "secName": "解釋發現",
        "theme": "citrus",
        "worksheet": "第04週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w04-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "終點82毫米就代表長82毫米嗎？保持長47毫米，只改起點來反駁。",
        "sec": "04-5",
        "secName": "解釋發現",
        "theme": "citrus",
        "worksheet": "第04週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w04-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "估一件小物的長度，選毫米或厘米實量；再設計一條合共1千米的兩段模型路線，標出每段長度。",
        "sec": "04-6",
        "secName": "生活應用",
        "theme": "teal",
        "worksheet": "第04週｜6 生活應用",
        "app": {
          "type": "ruler",
          "start": 35,
          "length": 47,
          "cases": [
            {
              "label": "35至82毫米",
              "values": {
                "start": 35,
                "length": 47
              }
            },
            {
              "label": "3厘米8毫米",
              "values": {
                "start": 0,
                "length": 38
              }
            },
            {
              "label": "2千米400米",
              "values": {
                "type": "length-unit",
                "a": 2,
                "b": 400
              }
            },
            {
              "label": "同長，改起點10毫米",
              "values": {
                "start": 10,
                "length": 47
              }
            }
          ]
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w04-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "04-6",
        "secName": "生活應用",
        "theme": "teal",
        "worksheet": "第04週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
