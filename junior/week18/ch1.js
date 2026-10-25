window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week18", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第18週 三位數乘法怎樣巧算",
    "color": "#126b9b",
    "sections": [
      "18-1 生活疑問",
      "18-2 大膽猜測",
      "18-3 動手探究",
      "18-4 數學驗證",
      "18-5 解釋發現",
      "18-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w18-life",
        "phase": 0,
        "kind": "question",
        "title": "三位數乘法怎樣巧算",
        "prompt": "每包125張紙，買16包。逐包相加、拆數或先湊整，哪一種較省步驟？",
        "sec": "18-1",
        "secName": "生活疑問",
        "theme": "berry",
        "worksheet": "第18週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "下冊 第27至28課 三位數與兩位數的乘法及乘除法巧算 第11至18頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w18-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我會怎樣拆16？哪一步能先湊出整千？",
        "sec": "18-2",
        "secName": "大膽猜測",
        "theme": "lime",
        "worksheet": "第18週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w18-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：125×16",
        "prompt": "每包125張紙，買16包。逐包相加、拆數或先湊整，哪一種較省步驟？",
        "sec": "18-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第18週｜3 動手探究",
        "app": {
          "type": "area-multiply",
          "a": 125,
          "b": 16,
          "cases": [
            {
              "label": "125×16",
              "values": {
                "a": 125,
                "b": 16
              }
            },
            {
              "label": "203×14",
              "values": {
                "a": 203,
                "b": 14
              }
            },
            {
              "label": "480÷6÷2",
              "values": {
                "type": "chain",
                "a": 480,
                "b": 6,
                "c": 2
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 試把16拆成8乘2，先算8包",
          "2. 另用10包與6包拆算",
          "3. 再用直式核對，指出每種方法的依據。"
        ]
      },
      {
        "id": "p3-w18-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "203×14",
        "sec": "18-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第18週｜3 動手探究",
        "app": {
          "type": "area-multiply",
          "a": 203,
          "b": 14,
          "cases": [
            {
              "label": "125×16",
              "values": {
                "a": 125,
                "b": 16
              }
            },
            {
              "label": "203×14",
              "values": {
                "a": 203,
                "b": 14
              }
            },
            {
              "label": "480÷6÷2",
              "values": {
                "type": "chain",
                "a": 480,
                "b": 6,
                "c": 2
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w18-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "480÷6÷2",
        "sec": "18-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第18週｜3 動手探究",
        "app": {
          "type": "chain",
          "a": 480,
          "b": 6,
          "cases": [
            {
              "label": "125×16",
              "values": {
                "a": 125,
                "b": 16
              }
            },
            {
              "label": "203×14",
              "values": {
                "a": 203,
                "b": 14
              }
            },
            {
              "label": "480÷6÷2",
              "values": {
                "type": "chain",
                "a": 480,
                "b": 6,
                "c": 2
              }
            }
          ],
          "c": 2,
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w18-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "18-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第18週｜4 數學驗證",
        "app": {
          "type": "area-multiply",
          "a": 125,
          "b": 16,
          "cases": [
            {
              "label": "125×16",
              "values": {
                "a": 125,
                "b": 16
              }
            },
            {
              "label": "203×14",
              "values": {
                "a": 203,
                "b": 14
              }
            },
            {
              "label": "480÷6÷2",
              "values": {
                "type": "chain",
                "a": 480,
                "b": 6,
                "c": 2
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
        "id": "p3-w18-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "用直式求126×23，並以126×20和126×3檢查兩層。",
        "sec": "18-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第18週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：126×20＝2520，126×3＝378，合共2898。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w18-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "算360÷12÷3，再用先求12×3作除數的方法核對。可否改成360÷(12÷3)？說理由。",
        "sec": "18-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第18週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：360÷12÷3＝10，360÷(12×3)＝10；360÷(12÷3)＝90，不等值。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w18-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "哪些改寫保留同樣的分組？不能只因較方便就隨意改括號。",
        "sec": "18-5",
        "secName": "解釋發現",
        "theme": "citrus",
        "worksheet": "第18週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w18-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "360÷12÷3能改成360÷(12÷3)嗎？用兩條路線求值，指出括號改變了分組。",
        "sec": "18-5",
        "secName": "解釋發現",
        "theme": "citrus",
        "worksheet": "第18週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w18-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "每袋25粒珠，每盒4袋，買12盒。用兩種次序求總數，推薦容易心算的一種。",
        "sec": "18-6",
        "secName": "生活應用",
        "theme": "teal",
        "worksheet": "第18週｜6 生活應用",
        "app": {
          "type": "grouping",
          "a": 25,
          "b": 4,
          "c": 12
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w18-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "18-6",
        "secName": "生活應用",
        "theme": "teal",
        "worksheet": "第18週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
