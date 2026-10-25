window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week20", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第20週 克千克和噸怎樣選",
    "color": "#126b9b",
    "sections": [
      "20-1 生活疑問",
      "20-2 大膽猜測",
      "20-3 動手探究",
      "20-4 數學驗證",
      "20-5 解釋發現",
      "20-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w20-life",
        "phase": 0,
        "kind": "question",
        "title": "克千克和噸怎樣選",
        "prompt": "一包米2千克，另一包1500克，哪包較重？只比較2和1500會出甚麼問題？",
        "sec": "20-1",
        "secName": "生活疑問",
        "theme": "coral",
        "worksheet": "第20週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "下冊 第30至31課 克和千克及噸 第22至30頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w20-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "先換成哪個單位較易比較？不同物件宜用甚麼重量單位？",
        "sec": "20-2",
        "secName": "大膽猜測",
        "theme": "ocean",
        "worksheet": "第20週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w20-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：2千克與1500克",
        "prompt": "一包米2千克，另一包1500克，哪包較重？只比較2和1500會出甚麼問題？",
        "sec": "20-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第20週｜3 動手探究",
        "app": {
          "type": "mass-unit",
          "a": 2,
          "b": 1500,
          "cases": [
            {
              "label": "2千克與1500克",
              "values": {
                "a": 2,
                "b": 1500
              }
            },
            {
              "label": "3千克250克",
              "values": {
                "a": 3,
                "b": 3250
              }
            },
            {
              "label": "2噸與1800千克",
              "values": {
                "a": 2000,
                "b": 1800,
                "tons": true
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 用標籤卡把同一重量配對",
          "2. 全部化成克或千克後排序",
          "3. 以1000個小單位換1個大單位的分組圖檢查。"
        ]
      },
      {
        "id": "p3-w20-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "3千克250克",
        "sec": "20-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第20週｜3 動手探究",
        "app": {
          "type": "mass-unit",
          "a": 3,
          "b": 3250,
          "cases": [
            {
              "label": "2千克與1500克",
              "values": {
                "a": 2,
                "b": 1500
              }
            },
            {
              "label": "3千克250克",
              "values": {
                "a": 3,
                "b": 3250
              }
            },
            {
              "label": "2噸與1800千克",
              "values": {
                "a": 2000,
                "b": 1800,
                "tons": true
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w20-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "2噸與1800千克",
        "sec": "20-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第20週｜3 動手探究",
        "app": {
          "type": "mass-unit",
          "a": 2000,
          "b": 1800,
          "cases": [
            {
              "label": "2千克與1500克",
              "values": {
                "a": 2,
                "b": 1500
              }
            },
            {
              "label": "3千克250克",
              "values": {
                "a": 3,
                "b": 3250
              }
            },
            {
              "label": "2噸與1800千克",
              "values": {
                "a": 2000,
                "b": 1800,
                "tons": true
              }
            }
          ],
          "tons": true,
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w20-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "20-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第20週｜4 數學驗證",
        "app": {
          "type": "mass-unit",
          "a": 2,
          "b": 1500,
          "cases": [
            {
              "label": "2千克與1500克",
              "values": {
                "a": 2,
                "b": 1500
              }
            },
            {
              "label": "3千克250克",
              "values": {
                "a": 3,
                "b": 3250
              }
            },
            {
              "label": "2噸與1800千克",
              "values": {
                "a": 2000,
                "b": 1800,
                "tons": true
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
        "id": "p3-w20-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "完成換算：4千克=□克；2噸300千克=□千克。各寫依據。",
        "sec": "20-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第20週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：4000克；2300千克。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w20-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "每包米5千克，8包共多少千克？若一車可載1噸，只裝這種米，最多多少包？",
        "sec": "20-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第20週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：5×8＝40千克；1噸＝1000千克，最多1000÷5＝200包。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w20-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "數字較大不一定較重，甚麼條件一致時才可直接比較？",
        "sec": "20-5",
        "secName": "解釋發現",
        "theme": "violet",
        "worksheet": "第20週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w20-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "2千克小於1500克，因2小於1500？統一單位找出錯誤。",
        "sec": "20-5",
        "secName": "解釋發現",
        "theme": "violet",
        "worksheet": "第20週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w20-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "為午餐運送120千克米，每箱最多裝15千克。求箱數；改用每箱20千克時再求，檢查總重量是否改變。",
        "sec": "20-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第20週｜6 生活應用",
        "app": {
          "type": "division",
          "n": 120,
          "d": 15,
          "large": true
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w20-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "20-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第20週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
