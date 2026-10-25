window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week07", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第07週 商中的零不能省",
    "color": "#126b9b",
    "sections": [
      "07-1 生活疑問",
      "07-2 大膽猜測",
      "07-3 動手探究",
      "07-4 數學驗證",
      "07-5 解釋發現",
      "07-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w07-life",
        "phase": 0,
        "kind": "question",
        "title": "商中的零不能省",
        "prompt": "306張卡平均分給3組。小明說十位沒有可分的十，所以商寫12。你會怎樣查？",
        "sec": "07-1",
        "secName": "生活疑問",
        "theme": "ocean",
        "worksheet": "第07週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第13至14課 三位數除一位數 第53至63頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w07-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "商接近100還是10？十位沒有分到十時，直式要怎樣記？",
        "sec": "07-2",
        "secName": "大膽猜測",
        "theme": "citrus",
        "worksheet": "第07週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w07-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：306÷3",
        "prompt": "306張卡平均分給3組。小明說十位沒有可分的十，所以商寫12。你會怎樣查？",
        "sec": "07-3",
        "secName": "動手探究",
        "theme": "teal",
        "worksheet": "第07週｜3 動手探究",
        "app": {
          "type": "zero-division",
          "n": 306,
          "d": 3,
          "cases": [
            {
              "label": "306÷3",
              "values": {
                "n": 306,
                "d": 3
              }
            },
            {
              "label": "408÷4",
              "values": {
                "n": 408,
                "d": 4
              }
            },
            {
              "label": "420÷4",
              "values": {
                "n": 420,
                "d": 4
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 畫百、十、個位圖，逐級平均分",
          "2. 把商每一位與分得的量連線",
          "3. 用商乘除數，檢查能否回到原數。"
        ]
      },
      {
        "id": "p3-w07-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "408÷4",
        "sec": "07-3",
        "secName": "動手探究",
        "theme": "teal",
        "worksheet": "第07週｜3 動手探究",
        "app": {
          "type": "zero-division",
          "n": 408,
          "d": 4,
          "cases": [
            {
              "label": "306÷3",
              "values": {
                "n": 306,
                "d": 3
              }
            },
            {
              "label": "408÷4",
              "values": {
                "n": 408,
                "d": 4
              }
            },
            {
              "label": "420÷4",
              "values": {
                "n": 420,
                "d": 4
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w07-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "420÷4",
        "sec": "07-3",
        "secName": "動手探究",
        "theme": "teal",
        "worksheet": "第07週｜3 動手探究",
        "app": {
          "type": "zero-division",
          "n": 420,
          "d": 4,
          "cases": [
            {
              "label": "306÷3",
              "values": {
                "n": 306,
                "d": 3
              }
            },
            {
              "label": "408÷4",
              "values": {
                "n": 408,
                "d": 4
              }
            },
            {
              "label": "420÷4",
              "values": {
                "n": 420,
                "d": 4
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w07-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "07-4",
        "secName": "數學驗證",
        "theme": "violet",
        "worksheet": "第07週｜4 數學驗證",
        "app": {
          "type": "zero-division",
          "n": 306,
          "d": 3,
          "cases": [
            {
              "label": "306÷3",
              "values": {
                "n": 306,
                "d": 3
              }
            },
            {
              "label": "408÷4",
              "values": {
                "n": 408,
                "d": 4
              }
            },
            {
              "label": "420÷4",
              "values": {
                "n": 420,
                "d": 4
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
        "id": "p3-w07-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "用直式計算505÷5，並寫乘法驗算。",
        "sec": "07-4",
        "secName": "數學驗證",
        "theme": "violet",
        "worksheet": "第07週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：505÷5＝101，101×5＝505。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w07-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "算816÷4。若把商中間的0刪去，乘回去與816相差多少？",
        "sec": "07-4",
        "secName": "數學驗證",
        "theme": "violet",
        "worksheet": "第07週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：816÷4＝204；刪0成24，24×4＝96，與816差720。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w07-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "商中0的作用是甚麼？以位值解釋，不只說因為規定如此。",
        "sec": "07-5",
        "secName": "解釋發現",
        "theme": "berry",
        "worksheet": "第07週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w07-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "把102中的0刪掉成12，乘回3會怎樣？是書寫少一位，還是數量改變？",
        "sec": "07-5",
        "secName": "解釋發現",
        "theme": "berry",
        "worksheet": "第07週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w07-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "600張入場券平均分給5班。各班得幾張？某同學算成12張，用估算和乘法各檢查一次。",
        "sec": "07-6",
        "secName": "生活應用",
        "theme": "lime",
        "worksheet": "第07週｜6 生活應用",
        "app": {
          "type": "zero-division",
          "n": 600,
          "d": 5
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w07-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "07-6",
        "secName": "生活應用",
        "theme": "lime",
        "worksheet": "第07週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
