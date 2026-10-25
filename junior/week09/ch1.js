window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week09", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第09週 三角形轉一轉還一樣嗎",
    "color": "#126b9b",
    "sections": [
      "09-1 生活疑問",
      "09-2 大膽猜測",
      "09-3 動手探究",
      "09-4 數學驗證",
      "09-5 解釋發現",
      "09-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w09-life",
        "phase": 0,
        "kind": "question",
        "title": "三角形轉一轉還一樣嗎",
        "prompt": "三角形紙卡倒轉後，原來的等腰三角形會變成另一類嗎？邊長和角的特徵會改變嗎？",
        "sec": "09-1",
        "secName": "生活疑問",
        "theme": "teal",
        "worksheet": "第09週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第16課 三角形 第71至77頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w09-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我用位置、邊長還是角來判斷？哪些特徵轉動後仍保留？",
        "sec": "09-2",
        "secName": "大膽猜測",
        "theme": "violet",
        "worksheet": "第09週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w09-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：兩邊同長的三角形",
        "prompt": "三角形紙卡倒轉後，原來的等腰三角形會變成另一類嗎？邊長和角的特徵會改變嗎？",
        "sec": "09-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第09週｜3 動手探究",
        "app": {
          "type": "triangle",
          "cases": [
            {
              "label": "等腰：兩邊5、第三邊6",
              "values": {
                "mode": 0
              }
            },
            {
              "label": "有一個直角",
              "values": {
                "mode": 1
              }
            },
            {
              "label": "等腰且直角",
              "values": {
                "mode": 2
              }
            }
          ],
          "mode": 0,
          "caseIndex": 0
        },
        "instructions": [
          "1. 畫一個等腰三角形和一個直角三角形",
          "2. 用紙角與直尺檢查，記下分類依據",
          "3. 轉動紙張再查，與同伴討論。"
        ]
      },
      {
        "id": "p3-w09-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "有一個直角的三角形",
        "sec": "09-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第09週｜3 動手探究",
        "app": {
          "type": "triangle",
          "cases": [
            {
              "label": "等腰：兩邊5、第三邊6",
              "values": {
                "mode": 0
              }
            },
            {
              "label": "有一個直角",
              "values": {
                "mode": 1
              }
            },
            {
              "label": "等腰且直角",
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
        "id": "p3-w09-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "同一張紙卡轉動後",
        "sec": "09-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第09週｜3 動手探究",
        "app": {
          "type": "triangle",
          "cases": [
            {
              "label": "等腰：兩邊5、第三邊6",
              "values": {
                "mode": 0
              }
            },
            {
              "label": "有一個直角",
              "values": {
                "mode": 1
              }
            },
            {
              "label": "等腰且直角",
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
        "id": "p3-w09-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "09-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第09週｜4 數學驗證",
        "app": {
          "type": "triangle",
          "cases": [
            {
              "label": "等腰：兩邊5、第三邊6",
              "values": {
                "mode": 0
              }
            },
            {
              "label": "有一個直角",
              "values": {
                "mode": 1
              }
            },
            {
              "label": "等腰且直角",
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
        "id": "p3-w09-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "一個三角形有兩邊各5厘米，第三邊6厘米。按邊分類，並畫草圖標記。",
        "sec": "09-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第09週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：等腰三角形：兩條腰各5厘米，底6厘米。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w09-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "有一個直角的三角形轉動半圈，直角會變成甚麼角？用紙角檢驗並說理由。",
        "sec": "09-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第09週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：仍是直角；轉動不改變兩邊夾角。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w09-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "同一個三角形可否同時是等腰三角形和直角三角形？畫一個例子試證。",
        "sec": "09-5",
        "secName": "解釋發現",
        "theme": "coral",
        "worksheet": "第09週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w09-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "畫一個同時等腰且直角的三角形，反駁「一個三角形只能屬於一類」。",
        "sec": "09-5",
        "secName": "解釋發現",
        "theme": "coral",
        "worksheet": "第09週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w09-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "設計兩張形狀不同的三角形路牌，分別以邊或角說明特徵；轉動後請同伴重新辨認。",
        "sec": "09-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第09週｜6 生活應用",
        "app": {
          "type": "triangle",
          "cases": [
            {
              "label": "等腰：兩邊5、第三邊6",
              "values": {
                "mode": 0
              }
            },
            {
              "label": "有一個直角",
              "values": {
                "mode": 1
              }
            },
            {
              "label": "等腰且直角",
              "values": {
                "mode": 2
              }
            }
          ]
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w09-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "09-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第09週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
