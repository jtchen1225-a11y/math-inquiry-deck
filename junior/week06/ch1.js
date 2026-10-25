window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week06", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第06週 平均分還是每幾個一組",
    "color": "#126b9b",
    "sections": [
      "06-1 生活疑問",
      "06-2 大膽猜測",
      "06-3 動手探究",
      "06-4 數學驗證",
      "06-5 解釋發現",
      "06-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w06-life",
        "phase": 0,
        "kind": "question",
        "title": "平均分還是每幾個一組",
        "prompt": "24粒棋子平均分給4人，和每4粒裝一袋，都是同一個除法嗎？答案的單位相同嗎？",
        "sec": "06-1",
        "secName": "生活疑問",
        "theme": "coral",
        "worksheet": "第06週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第12課 兩位數除一位數 第49至52頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w06-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "兩種分法的數字結果會相同嗎？結果各表示甚麼？",
        "sec": "06-2",
        "secName": "大膽猜測",
        "theme": "ocean",
        "worksheet": "第06週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w06-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：24粒平均分4人",
        "prompt": "24粒棋子平均分給4人，和每4粒裝一袋，都是同一個除法嗎？答案的單位相同嗎？",
        "sec": "06-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第06週｜3 動手探究",
        "app": {
          "type": "division",
          "n": 24,
          "d": 4,
          "cases": [
            {
              "label": "24粒平均分4人",
              "values": {
                "n": 24,
                "d": 4,
                "alternate": false
              }
            },
            {
              "label": "24粒每4粒一袋",
              "values": {
                "n": 24,
                "d": 4,
                "alternate": true
              }
            },
            {
              "label": "48粒平均分3人",
              "values": {
                "n": 48,
                "d": 3,
                "alternate": false
              }
            }
          ],
          "alternate": false,
          "caseIndex": 0
        },
        "instructions": [
          "1. 用24粒棋子實做兩種分法",
          "2. 畫圈並寫清楚每人粒數或袋數",
          "3. 再把總數換成48，用乘法反查。"
        ]
      },
      {
        "id": "p3-w06-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "24粒每4粒一袋",
        "sec": "06-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第06週｜3 動手探究",
        "app": {
          "type": "division",
          "n": 24,
          "d": 4,
          "cases": [
            {
              "label": "24粒平均分4人",
              "values": {
                "n": 24,
                "d": 4,
                "alternate": false
              }
            },
            {
              "label": "24粒每4粒一袋",
              "values": {
                "n": 24,
                "d": 4,
                "alternate": true
              }
            },
            {
              "label": "48粒平均分3人",
              "values": {
                "n": 48,
                "d": 3,
                "alternate": false
              }
            }
          ],
          "alternate": true,
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w06-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "48粒平均分3人",
        "sec": "06-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第06週｜3 動手探究",
        "app": {
          "type": "division",
          "n": 48,
          "d": 3,
          "cases": [
            {
              "label": "24粒平均分4人",
              "values": {
                "n": 24,
                "d": 4,
                "alternate": false
              }
            },
            {
              "label": "24粒每4粒一袋",
              "values": {
                "n": 24,
                "d": 4,
                "alternate": true
              }
            },
            {
              "label": "48粒平均分3人",
              "values": {
                "n": 48,
                "d": 3,
                "alternate": false
              }
            }
          ],
          "alternate": false,
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w06-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "06-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第06週｜4 數學驗證",
        "app": {
          "type": "division",
          "n": 24,
          "d": 4,
          "cases": [
            {
              "label": "24粒平均分4人",
              "values": {
                "n": 24,
                "d": 4,
                "alternate": false
              }
            },
            {
              "label": "24粒每4粒一袋",
              "values": {
                "n": 24,
                "d": 4,
                "alternate": true
              }
            },
            {
              "label": "48粒平均分3人",
              "values": {
                "n": 48,
                "d": 3,
                "alternate": false
              }
            }
          ],
          "alternate": false,
          "caseIndex": 0
        },
        "instructions": [
          "先遮住核對結果，用第二種方法重做。",
          "指出兩種方法用了哪一個共同的數量關係。"
        ]
      },
      {
        "id": "p3-w06-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "算48÷3。把48拆成30和18，分別分給3人，再合起來。",
        "sec": "06-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第06週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：30÷3＋18÷3＝10＋6＝16。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w06-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "有72張卡，每8張一包，可裝幾包？另把72張平均分給8人，各得幾張？",
        "sec": "06-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第06週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：72÷8＝9；分別是9包與每人9張。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w06-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "為甚麼同一算式在兩題中要寫不同的答案單位？",
        "sec": "06-5",
        "secName": "解釋發現",
        "theme": "violet",
        "worksheet": "第06週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w06-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "24÷4的4，可能是4人或每袋4粒。只寫「6」足夠嗎？重建兩個題目並標單位。",
        "sec": "06-5",
        "secName": "解釋發現",
        "theme": "violet",
        "worksheet": "第06週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w06-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "32件點心先平均放4盤，再把每盤平均給2人。每人幾件？用一步一步分與乘法驗算。",
        "sec": "06-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第06週｜6 生活應用",
        "app": {
          "type": "division",
          "n": 32,
          "d": 4
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w06-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "06-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第06週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
