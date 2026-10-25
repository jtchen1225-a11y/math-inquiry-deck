window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week14", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第14週 一天的時刻怎樣編碼",
    "color": "#126b9b",
    "sections": [
      "14-1 生活疑問",
      "14-2 大膽猜測",
      "14-3 動手探究",
      "14-4 數學驗證",
      "14-5 解釋發現",
      "14-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w14-life",
        "phase": 0,
        "kind": "question",
        "title": "一天的時刻怎樣編碼",
        "prompt": "節目表寫15時30分，是否表示活動做了15小時30分？時刻和經過時間有何不同？",
        "sec": "14-1",
        "secName": "生活疑問",
        "theme": "ocean",
        "worksheet": "第14週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第22課 24小時報時制 第94至97頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w14-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我會怎樣分辨上午與下午同一鐘面位置？",
        "sec": "14-2",
        "secName": "大膽猜測",
        "theme": "citrus",
        "worksheet": "第14週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w14-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：下午3時30分",
        "prompt": "節目表寫15時30分，是否表示活動做了15小時30分？時刻和經過時間有何不同？",
        "sec": "14-3",
        "secName": "動手探究",
        "theme": "teal",
        "worksheet": "第14週｜3 動手探究",
        "app": {
          "type": "daytime",
          "start": 930,
          "minutes": 40,
          "cases": [
            {
              "label": "下午3:30",
              "values": {
                "start": 930,
                "minutes": 40
              }
            },
            {
              "label": "上午8:15",
              "values": {
                "start": 495,
                "minutes": 40
              }
            },
            {
              "label": "18:05",
              "values": {
                "start": 1085,
                "minutes": 40
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 在時間線上標中午12時",
          "2. 把下午時刻與24小時報時配對",
          "3. 計算兩個時刻的間隔，檢查是否跨中午。"
        ]
      },
      {
        "id": "p3-w14-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "上午8時15分",
        "sec": "14-3",
        "secName": "動手探究",
        "theme": "teal",
        "worksheet": "第14週｜3 動手探究",
        "app": {
          "type": "daytime",
          "start": 495,
          "minutes": 40,
          "cases": [
            {
              "label": "下午3:30",
              "values": {
                "start": 930,
                "minutes": 40
              }
            },
            {
              "label": "上午8:15",
              "values": {
                "start": 495,
                "minutes": 40
              }
            },
            {
              "label": "18:05",
              "values": {
                "start": 1085,
                "minutes": 40
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w14-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "18時05分",
        "sec": "14-3",
        "secName": "動手探究",
        "theme": "teal",
        "worksheet": "第14週｜3 動手探究",
        "app": {
          "type": "daytime",
          "start": 1085,
          "minutes": 40,
          "cases": [
            {
              "label": "下午3:30",
              "values": {
                "start": 930,
                "minutes": 40
              }
            },
            {
              "label": "上午8:15",
              "values": {
                "start": 495,
                "minutes": 40
              }
            },
            {
              "label": "18:05",
              "values": {
                "start": 1085,
                "minutes": 40
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w14-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "14-4",
        "secName": "數學驗證",
        "theme": "violet",
        "worksheet": "第14週｜4 數學驗證",
        "app": {
          "type": "daytime",
          "start": 930,
          "minutes": 40,
          "cases": [
            {
              "label": "下午3:30",
              "values": {
                "start": 930,
                "minutes": 40
              }
            },
            {
              "label": "上午8:15",
              "values": {
                "start": 495,
                "minutes": 40
              }
            },
            {
              "label": "18:05",
              "values": {
                "start": 1085,
                "minutes": 40
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
        "id": "p3-w14-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "把下午4時20分改寫為24小時制；把21時10分改寫為上午或下午的說法。",
        "sec": "14-4",
        "secName": "數學驗證",
        "theme": "violet",
        "worksheet": "第14週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：16:20；下午9時10分。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w14-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "活動13時45分開始，15時10分結束。歷時多久？另求14時50分後35分鐘的時刻。",
        "sec": "14-4",
        "secName": "數學驗證",
        "theme": "violet",
        "worksheet": "第14週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：13:45到15:10共85分鐘；14:50後35分鐘為15:25。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w14-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "時刻與時長的單位可以相似，但意思有甚麼不同？各寫一個例子。",
        "sec": "14-5",
        "secName": "解釋發現",
        "theme": "berry",
        "worksheet": "第14週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w14-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "15:30是時刻還是時長？能否只憑這個數字知道活動做多久？補充所需資料。",
        "sec": "14-5",
        "secName": "解釋發現",
        "theme": "berry",
        "worksheet": "第14週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w14-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "安排下午2時開始、下午5時前結束的參觀：步行20分、參觀75分、休息15分、回程20分。列行程並判斷是否趕得及。",
        "sec": "14-6",
        "secName": "生活應用",
        "theme": "lime",
        "worksheet": "第14週｜6 生活應用",
        "app": {
          "type": "daytime",
          "start": 840,
          "minutes": 130
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w14-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "14-6",
        "secName": "生活應用",
        "theme": "lime",
        "worksheet": "第14週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
