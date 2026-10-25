window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week24", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第24週 一組物件也可平均分",
    "color": "#126b9b",
    "sections": [
      "24-1 生活疑問",
      "24-2 大膽猜測",
      "24-3 動手探究",
      "24-4 數學驗證",
      "24-5 解釋發現",
      "24-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w24-life",
        "phase": 0,
        "kind": "question",
        "title": "一組物件也可平均分",
        "prompt": "12粒棋子的(1)/(3)和15粒棋子的(1)/(3)，粒數會相同嗎？分數相同代表甚麼相同？",
        "sec": "24-1",
        "secName": "生活疑問",
        "theme": "violet",
        "worksheet": "第24週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "下冊 第37課 一組物件的幾分之幾 第54至55頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w24-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我猜要先分成幾組？每組的粒數受甚麼影響？",
        "sec": "24-2",
        "secName": "大膽猜測",
        "theme": "berry",
        "worksheet": "第24週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w24-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：12粒的(1)/(3)",
        "prompt": "12粒棋子的(1)/(3)和15粒棋子的(1)/(3)，粒數會相同嗎？分數相同代表甚麼相同？",
        "sec": "24-3",
        "secName": "動手探究",
        "theme": "lime",
        "worksheet": "第24週｜3 動手探究",
        "app": {
          "type": "fraction-set",
          "a": 12,
          "d": 3,
          "n": 1,
          "cases": [
            {
              "label": "12粒的1/3",
              "values": {
                "a": 12,
                "d": 3,
                "n": 1
              }
            },
            {
              "label": "12粒的2/3",
              "values": {
                "a": 12,
                "d": 3,
                "n": 2
              }
            },
            {
              "label": "15粒的3/5",
              "values": {
                "a": 15,
                "d": 5,
                "n": 3
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 用12粒棋子平均分3組，取其中1組",
          "2. 改為取2組，寫份數與粒數",
          "3. 換成15粒平均分5組，取3組。"
        ]
      },
      {
        "id": "p3-w24-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "12粒的(2)/(3)",
        "sec": "24-3",
        "secName": "動手探究",
        "theme": "lime",
        "worksheet": "第24週｜3 動手探究",
        "app": {
          "type": "fraction-set",
          "a": 12,
          "d": 3,
          "n": 2,
          "cases": [
            {
              "label": "12粒的1/3",
              "values": {
                "a": 12,
                "d": 3,
                "n": 1
              }
            },
            {
              "label": "12粒的2/3",
              "values": {
                "a": 12,
                "d": 3,
                "n": 2
              }
            },
            {
              "label": "15粒的3/5",
              "values": {
                "a": 15,
                "d": 5,
                "n": 3
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w24-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "15粒的(3)/(5)",
        "sec": "24-3",
        "secName": "動手探究",
        "theme": "lime",
        "worksheet": "第24週｜3 動手探究",
        "app": {
          "type": "fraction-set",
          "a": 15,
          "d": 5,
          "n": 3,
          "cases": [
            {
              "label": "12粒的1/3",
              "values": {
                "a": 12,
                "d": 3,
                "n": 1
              }
            },
            {
              "label": "12粒的2/3",
              "values": {
                "a": 12,
                "d": 3,
                "n": 2
              }
            },
            {
              "label": "15粒的3/5",
              "values": {
                "a": 15,
                "d": 5,
                "n": 3
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w24-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "24-4",
        "secName": "數學驗證",
        "theme": "coral",
        "worksheet": "第24週｜4 數學驗證",
        "app": {
          "type": "fraction-set",
          "a": 12,
          "d": 3,
          "n": 1,
          "cases": [
            {
              "label": "12粒的1/3",
              "values": {
                "a": 12,
                "d": 3,
                "n": 1
              }
            },
            {
              "label": "12粒的2/3",
              "values": {
                "a": 12,
                "d": 3,
                "n": 2
              }
            },
            {
              "label": "15粒的3/5",
              "values": {
                "a": 15,
                "d": 5,
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
        "id": "p3-w24-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "18枝筆的(2)/(3)是多少枝？先畫組，再列算式。",
        "sec": "24-4",
        "secName": "數學驗證",
        "theme": "coral",
        "worksheet": "第24週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：18÷3×2＝12枝。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w24-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "20元零用錢用了(1)/(4)，用了多少元，餘多少元？合起來檢查。",
        "sec": "24-4",
        "secName": "數學驗證",
        "theme": "coral",
        "worksheet": "第24週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：20÷4＝5元，餘15元；5＋15＝20。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w24-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "分母告訴我們平均分幾份，分子告訴我們取幾份；以一組棋子說明。",
        "sec": "24-5",
        "secName": "解釋發現",
        "theme": "ocean",
        "worksheet": "第24週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w24-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "12粒的1/3與15粒的1/3是否相同粒數？固定分數、改整體檢查。",
        "sec": "24-5",
        "secName": "解釋發現",
        "theme": "ocean",
        "worksheet": "第24週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w24-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "全班36人，(4)/(9)參加合唱。求參加與未參加人數，畫分組圖並核對總人數。",
        "sec": "24-6",
        "secName": "生活應用",
        "theme": "citrus",
        "worksheet": "第24週｜6 生活應用",
        "app": {
          "type": "fraction-set",
          "a": 36,
          "d": 9,
          "n": 4
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w24-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "24-6",
        "secName": "生活應用",
        "theme": "citrus",
        "worksheet": "第24週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
