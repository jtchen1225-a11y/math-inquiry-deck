window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week03", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第03週 估算能直接作決定嗎",
    "color": "#126b9b",
    "sections": [
      "03-1 生活疑問",
      "03-2 大膽猜測",
      "03-3 動手探究",
      "03-4 數學驗證",
      "03-5 解釋發現",
      "03-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w03-life",
        "phase": 0,
        "kind": "question",
        "title": "估算能直接作決定嗎",
        "prompt": "195人出遊，每車48座。把48看成50後，說4輛車夠坐，這個決定可靠嗎？",
        "sec": "03-1",
        "secName": "生活疑問",
        "theme": "violet",
        "worksheet": "第03週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第6課 乘法的應用 第24至26頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w03-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "估算會把座位數估多還是估少？我預測要多少輛？",
        "sec": "03-2",
        "secName": "大膽猜測",
        "theme": "berry",
        "worksheet": "第03週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w03-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：4輛每車48座",
        "prompt": "195人出遊，每車48座。把48看成50後，說4輛車夠坐，這個決定可靠嗎？",
        "sec": "03-3",
        "secName": "動手探究",
        "theme": "lime",
        "worksheet": "第03週｜3 動手探究",
        "app": {
          "type": "estimate",
          "a": 48,
          "b": 4,
          "target": 195,
          "cases": [
            {
              "label": "4車×48座，需要195座",
              "values": {
                "a": 48,
                "b": 4,
                "target": 195
              }
            },
            {
              "label": "改5車",
              "values": {
                "a": 48,
                "b": 5,
                "target": 195
              }
            },
            {
              "label": "6盒×32支，需要190支",
              "values": {
                "a": 32,
                "b": 6,
                "target": 190
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 先估4輛可坐的人數",
          "2. 算實際座位並與195比較",
          "3. 再查5輛，記下足夠和不足的證據。"
        ]
      },
      {
        "id": "p3-w03-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "5輛每車48座",
        "sec": "03-3",
        "secName": "動手探究",
        "theme": "lime",
        "worksheet": "第03週｜3 動手探究",
        "app": {
          "type": "estimate",
          "a": 48,
          "b": 5,
          "target": 195,
          "cases": [
            {
              "label": "4車×48座，需要195座",
              "values": {
                "a": 48,
                "b": 4,
                "target": 195
              }
            },
            {
              "label": "改5車",
              "values": {
                "a": 48,
                "b": 5,
                "target": 195
              }
            },
            {
              "label": "6盒×32支，需要190支",
              "values": {
                "a": 32,
                "b": 6,
                "target": 190
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w03-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "6盒每盒32支，供190人每人1支",
        "sec": "03-3",
        "secName": "動手探究",
        "theme": "lime",
        "worksheet": "第03週｜3 動手探究",
        "app": {
          "type": "estimate",
          "a": 32,
          "b": 6,
          "target": 190,
          "cases": [
            {
              "label": "4車×48座，需要195座",
              "values": {
                "a": 48,
                "b": 4,
                "target": 195
              }
            },
            {
              "label": "改5車",
              "values": {
                "a": 48,
                "b": 5,
                "target": 195
              }
            },
            {
              "label": "6盒×32支，需要190支",
              "values": {
                "a": 32,
                "b": 6,
                "target": 190
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w03-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "03-4",
        "secName": "數學驗證",
        "theme": "coral",
        "worksheet": "第03週｜4 數學驗證",
        "app": {
          "type": "estimate",
          "a": 48,
          "b": 4,
          "target": 195,
          "cases": [
            {
              "label": "4車×48座，需要195座",
              "values": {
                "a": 48,
                "b": 4,
                "target": 195
              }
            },
            {
              "label": "改5車",
              "values": {
                "a": 48,
                "b": 5,
                "target": 195
              }
            },
            {
              "label": "6盒×32支，需要190支",
              "values": {
                "a": 32,
                "b": 6,
                "target": 190
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
        "id": "p3-w03-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "每盒24瓶，買8盒供190人每人1瓶。夠嗎？剩下或欠多少？",
        "sec": "03-4",
        "secName": "數學驗證",
        "theme": "coral",
        "worksheet": "第03週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：24×8＝192瓶，足夠，餘2瓶。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w03-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "每本故事書29元，買7本，預算200元。估成30元一本後，還需要精算嗎？說明。",
        "sec": "03-4",
        "secName": "數學驗證",
        "theme": "coral",
        "worksheet": "第03週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：29×7＝203元，超預算3元；30×7＝210元是上估，本例仍須精算才能確定不足。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w03-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "估算適合先做甚麼？甚麼情況需要精算才能下決定？",
        "sec": "03-5",
        "secName": "解釋發現",
        "theme": "ocean",
        "worksheet": "第03週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w03-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "把單價往上估後超預算，就一定買不起嗎？用24元×8本、預算200元找反例。",
        "sec": "03-5",
        "secName": "解釋發現",
        "theme": "ocean",
        "worksheet": "第03週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w03-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "為180人準備飲品，每箱28瓶。試6箱與7箱，選足夠而箱數最少的方案。",
        "sec": "03-6",
        "secName": "生活應用",
        "theme": "citrus",
        "worksheet": "第03週｜6 生活應用",
        "app": {
          "type": "estimate",
          "a": 28,
          "b": 6,
          "target": 180
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w03-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "03-6",
        "secName": "生活應用",
        "theme": "citrus",
        "worksheet": "第03週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
