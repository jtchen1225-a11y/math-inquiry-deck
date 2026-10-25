window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week22", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第22週 同周界能圍多大",
    "color": "#126b9b",
    "sections": [
      "22-1 生活疑問",
      "22-2 大膽猜測",
      "22-3 動手探究",
      "22-4 數學驗證",
      "22-5 解釋發現",
      "22-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w22-life",
        "phase": 0,
        "kind": "question",
        "title": "同周界能圍多大",
        "prompt": "同樣用16米繩圍長方形，地面面積一定相同嗎？哪個整米邊長方案較大？",
        "sec": "22-1",
        "secName": "生活疑問",
        "theme": "citrus",
        "worksheet": "第22週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "下冊 第33至34課 長方形及正方形面積 第40至45頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w22-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我猜最長的一邊越長，面積就越大嗎？先選一個方案。",
        "sec": "22-2",
        "secName": "大膽猜測",
        "theme": "teal",
        "worksheet": "第22週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w22-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：長7米闊1米",
        "prompt": "同樣用16米繩圍長方形，地面面積一定相同嗎？哪個整米邊長方案較大？",
        "sec": "22-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第22週｜3 動手探究",
        "app": {
          "type": "area-compare",
          "target": 16,
          "cases": [
            {
              "label": "7×1",
              "values": {
                "selected": 0
              }
            },
            {
              "label": "6×2",
              "values": {
                "selected": 1
              }
            },
            {
              "label": "5×3與4×4",
              "values": {
                "selected": 2
              }
            }
          ],
          "selected": 0,
          "caseIndex": 0
        },
        "instructions": [
          "1. 有次序列出一長一闊合共8米的配搭",
          "2. 畫單位格並算每個面積",
          "3. 再核對每個圖的外圈是否同為16米。"
        ]
      },
      {
        "id": "p3-w22-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "長6米闊2米",
        "sec": "22-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第22週｜3 動手探究",
        "app": {
          "type": "area-compare",
          "target": 16,
          "cases": [
            {
              "label": "7×1",
              "values": {
                "selected": 0
              }
            },
            {
              "label": "6×2",
              "values": {
                "selected": 1
              }
            },
            {
              "label": "5×3與4×4",
              "values": {
                "selected": 2
              }
            }
          ],
          "selected": 1,
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w22-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "長5米闊3米及邊長4米",
        "sec": "22-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第22週｜3 動手探究",
        "app": {
          "type": "area-compare",
          "target": 16,
          "cases": [
            {
              "label": "7×1",
              "values": {
                "selected": 0
              }
            },
            {
              "label": "6×2",
              "values": {
                "selected": 1
              }
            },
            {
              "label": "5×3與4×4",
              "values": {
                "selected": 2
              }
            }
          ],
          "selected": 2,
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w22-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "22-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第22週｜4 數學驗證",
        "app": {
          "type": "area-compare",
          "target": 16,
          "cases": [
            {
              "label": "7×1",
              "values": {
                "selected": 0
              }
            },
            {
              "label": "6×2",
              "values": {
                "selected": 1
              }
            },
            {
              "label": "5×3與4×4",
              "values": {
                "selected": 2
              }
            }
          ],
          "selected": 0,
          "caseIndex": 0
        },
        "instructions": [
          "先遮住核對結果，用第二種方法重做。",
          "指出兩種方法用了哪一個共同的數量關係。"
        ]
      },
      {
        "id": "p3-w22-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "長9厘米、闊4厘米的卡片，面積與周界各多少？分別標單位。",
        "sec": "22-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第22週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：面積36平方厘米，周界26厘米。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w22-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "由數每行格數整理：長方形面積=長×□；正方形面積=邊長×□。用一幅圖說明。",
        "sec": "22-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第22週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：長方形面積＝長×闊；正方形面積＝邊長×邊長。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w22-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "周界相同能否推出面積相同？用表中的兩組數據反駁或支持。",
        "sec": "22-5",
        "secName": "解釋發現",
        "theme": "lime",
        "worksheet": "第22週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w22-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "7×1與4×4同周界16，哪個面積大？反駁邊越長面積越大的說法。",
        "sec": "22-5",
        "secName": "解釋發現",
        "theme": "lime",
        "worksheet": "第22週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w22-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "用16根1米小棒圍整米邊長的長方形，找出面積最大的一種。把所有不重複方案列出，說明沒有漏找。",
        "sec": "22-6",
        "secName": "生活應用",
        "theme": "coral",
        "worksheet": "第22週｜6 生活應用",
        "app": {
          "type": "area-compare",
          "target": 16,
          "cases": [
            {
              "label": "7×1",
              "values": {
                "selected": 0
              }
            },
            {
              "label": "6×2",
              "values": {
                "selected": 1
              }
            },
            {
              "label": "5×3與4×4",
              "values": {
                "selected": 2
              }
            }
          ]
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w22-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "22-6",
        "secName": "生活應用",
        "theme": "coral",
        "worksheet": "第22週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
