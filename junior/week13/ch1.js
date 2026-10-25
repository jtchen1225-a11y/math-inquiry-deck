window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week13", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第13週 時間為甚麼不逢十進位",
    "color": "#126b9b",
    "sections": [
      "13-1 生活疑問",
      "13-2 大膽猜測",
      "13-3 動手探究",
      "13-4 數學驗證",
      "13-5 解釋發現",
      "13-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w13-life",
        "phase": 0,
        "kind": "question",
        "title": "時間為甚麼不逢十進位",
        "prompt": "活動上午9時25分開始，歷時40分鐘。寫成9時65分合理嗎？",
        "sec": "13-1",
        "secName": "生活疑問",
        "theme": "coral",
        "worksheet": "第13週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第21課 活動時間 第90至93頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w13-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我預測何時結束？跨過整點時應怎樣記錄？",
        "sec": "13-2",
        "secName": "大膽猜測",
        "theme": "ocean",
        "worksheet": "第13週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w13-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：9時25分後40分鐘",
        "prompt": "活動上午9時25分開始，歷時40分鐘。寫成9時65分合理嗎？",
        "sec": "13-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第13週｜3 動手探究",
        "app": {
          "type": "time",
          "start": 565,
          "minutes": 40,
          "cases": [
            {
              "label": "9:25後40分鐘",
              "values": {
                "start": 565,
                "minutes": 40
              }
            },
            {
              "label": "8:30後40分鐘",
              "values": {
                "start": 510,
                "minutes": 40
              }
            },
            {
              "label": "105秒換成分和秒",
              "values": {
                "type": "time-unit",
                "n": 105
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 畫由9時25分到10時25分的時間線",
          "2. 先走到整點，再走餘下時間",
          "3. 換成分、秒，找出進位的分組數。"
        ]
      },
      {
        "id": "p3-w13-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "8時30分後40分鐘",
        "sec": "13-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第13週｜3 動手探究",
        "app": {
          "type": "time",
          "start": 510,
          "minutes": 40,
          "cases": [
            {
              "label": "9:25後40分鐘",
              "values": {
                "start": 565,
                "minutes": 40
              }
            },
            {
              "label": "8:30後40分鐘",
              "values": {
                "start": 510,
                "minutes": 40
              }
            },
            {
              "label": "105秒換成分和秒",
              "values": {
                "type": "time-unit",
                "n": 105
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w13-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "105秒換成分和秒",
        "sec": "13-3",
        "secName": "動手探究",
        "theme": "citrus",
        "worksheet": "第13週｜3 動手探究",
        "app": {
          "type": "time-unit",
          "start": 565,
          "minutes": 40,
          "cases": [
            {
              "label": "9:25後40分鐘",
              "values": {
                "start": 565,
                "minutes": 40
              }
            },
            {
              "label": "8:30後40分鐘",
              "values": {
                "start": 510,
                "minutes": 40
              }
            },
            {
              "label": "105秒換成分和秒",
              "values": {
                "type": "time-unit",
                "n": 105
              }
            }
          ],
          "n": 105,
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w13-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "13-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第13週｜4 數學驗證",
        "app": {
          "type": "time",
          "start": 565,
          "minutes": 40,
          "cases": [
            {
              "label": "9:25後40分鐘",
              "values": {
                "start": 565,
                "minutes": 40
              }
            },
            {
              "label": "8:30後40分鐘",
              "values": {
                "start": 510,
                "minutes": 40
              }
            },
            {
              "label": "105秒換成分和秒",
              "values": {
                "type": "time-unit",
                "n": 105
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
        "id": "p3-w13-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "換算：2分15秒=□秒；180分=□小時。寫其中一題的計算。",
        "sec": "13-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第13週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：135秒；3小時。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w13-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "上午10時45分開始閱讀，11時20分結束。共讀多久？用分段法核對。",
        "sec": "13-4",
        "secName": "數學驗證",
        "theme": "teal",
        "worksheet": "第13週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：10:45到11:00是15分，再到11:20是20分，共35分鐘。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w13-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "鐘面上的1小時怎樣對應60分鐘？為甚麼不能把時間當普通整數直接寫？",
        "sec": "13-5",
        "secName": "解釋發現",
        "theme": "violet",
        "worksheet": "第13週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w13-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "9:25＋40分鐘，寫9:65哪裡有問題？用60分鐘一組重新命名。",
        "sec": "13-5",
        "secName": "解釋發現",
        "theme": "violet",
        "worksheet": "第13週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w13-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "設計合共90分鐘的閱讀活動，至少有兩段閱讀和一次休息。列開始、結束時間，核對總時長。",
        "sec": "13-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第13週｜6 生活應用",
        "app": {
          "type": "time",
          "start": 540,
          "minutes": 90
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w13-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "13-6",
        "secName": "生活應用",
        "theme": "berry",
        "worksheet": "第13週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
