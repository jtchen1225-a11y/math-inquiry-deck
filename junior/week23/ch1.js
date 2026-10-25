window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week23", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第23週 平均分才是幾分之一",
    "color": "#126b9b",
    "sections": [
      "23-1 生活疑問",
      "23-2 大膽猜測",
      "23-3 動手探究",
      "23-4 數學驗證",
      "23-5 解釋發現",
      "23-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w23-life",
        "phase": 0,
        "kind": "question",
        "title": "平均分才是幾分之一",
        "prompt": "一張紙分成4塊，拿走1塊就一定是四分之一嗎？若4塊大小不同呢？",
        "sec": "23-1",
        "secName": "生活疑問",
        "theme": "teal",
        "worksheet": "第23週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "下冊 第35至36課 初步認識分數及幾分之幾 第46至53頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w23-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我認為要先符合甚麼條件，才能寫成分數？",
        "sec": "23-2",
        "secName": "大膽猜測",
        "theme": "violet",
        "worksheet": "第23週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w23-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：平均分4份取1份",
        "prompt": "一張紙分成4塊，拿走1塊就一定是四分之一嗎？若4塊大小不同呢？",
        "sec": "23-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第23週｜3 動手探究",
        "app": {
          "type": "fraction",
          "d": 4,
          "n": 1,
          "cases": [
            {
              "label": "平均分4份取1",
              "values": {
                "d": 4,
                "n": 1
              }
            },
            {
              "label": "不平均分4塊取1",
              "values": {
                "d": 4,
                "n": 1,
                "alternate": true
              }
            },
            {
              "label": "平均分4份取3",
              "values": {
                "d": 4,
                "n": 3
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 畫同樣大的兩個長方形，一個平均分4份、一個不平均分",
          "2. 各塗1份，檢查能否用相同分數表示",
          "3. 另把平均分的圖塗3份。"
        ]
      },
      {
        "id": "p3-w23-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "不平均分4塊取1塊",
        "sec": "23-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第23週｜3 動手探究",
        "app": {
          "type": "fraction",
          "d": 4,
          "n": 1,
          "cases": [
            {
              "label": "平均分4份取1",
              "values": {
                "d": 4,
                "n": 1
              }
            },
            {
              "label": "不平均分4塊取1",
              "values": {
                "d": 4,
                "n": 1,
                "alternate": true
              }
            },
            {
              "label": "平均分4份取3",
              "values": {
                "d": 4,
                "n": 3
              }
            }
          ],
          "alternate": true,
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w23-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "平均分4份取3份",
        "sec": "23-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第23週｜3 動手探究",
        "app": {
          "type": "fraction",
          "d": 4,
          "n": 3,
          "cases": [
            {
              "label": "平均分4份取1",
              "values": {
                "d": 4,
                "n": 1
              }
            },
            {
              "label": "不平均分4塊取1",
              "values": {
                "d": 4,
                "n": 1,
                "alternate": true
              }
            },
            {
              "label": "平均分4份取3",
              "values": {
                "d": 4,
                "n": 3
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w23-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "23-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第23週｜4 數學驗證",
        "app": {
          "type": "fraction",
          "d": 4,
          "n": 1,
          "cases": [
            {
              "label": "平均分4份取1",
              "values": {
                "d": 4,
                "n": 1
              }
            },
            {
              "label": "不平均分4塊取1",
              "values": {
                "d": 4,
                "n": 1,
                "alternate": true
              }
            },
            {
              "label": "平均分4份取3",
              "values": {
                "d": 4,
                "n": 3
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
        "id": "p3-w23-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "畫一個長方形，平均分8份並塗3份，寫分數，說分子和分母各表示甚麼。",
        "sec": "23-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第23週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：3/8；分母8指整體平均分8份，分子3指取3份。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w23-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "同一張紙先取(1)/(4)，再多取相同大小的1份，一共取了幾分之幾？以塗色說明。",
        "sec": "23-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第23週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：2/4；只限同一整體中相同大小的兩份。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w23-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "只數塊數為甚麼不足以判斷分數？請指出整體和平均分的條件。",
        "sec": "23-5",
        "secName": "解釋發現",
        "theme": "coral",
        "worksheet": "第23週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w23-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "分成四塊、取一塊就必定1/4嗎？用不平均分紙條作反例。",
        "sec": "23-5",
        "secName": "解釋發現",
        "theme": "coral",
        "worksheet": "第23週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w23-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "設計一張分享點心的圖：同樣大的一盤平均分6份，甲取2份、乙取3份。寫兩人的分數及剩下的分數，檢查總份數。",
        "sec": "23-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第23週｜6 生活應用",
        "app": {
          "type": "fraction",
          "d": 6,
          "n": 2
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w23-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "23-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第23週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
