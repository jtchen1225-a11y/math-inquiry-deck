window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week16", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第16週 乘整十數多了甚麼",
    "color": "#126b9b",
    "sections": [
      "16-1 生活疑問",
      "16-2 大膽猜測",
      "16-3 動手探究",
      "16-4 數學驗證",
      "16-5 解釋發現",
      "16-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w16-life",
        "phase": 0,
        "kind": "question",
        "title": "乘整十數多了甚麼",
        "prompt": "每包24張紙，買3包和買30包，為甚麼第二題不能只在直式寫72？",
        "sec": "16-1",
        "secName": "生活疑問",
        "theme": "teal",
        "worksheet": "第16週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "下冊 第25課 兩位數與整十數的乘法 第4至6頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w16-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我預測兩個乘積有甚麼關係？末尾的0代表甚麼？",
        "sec": "16-2",
        "secName": "大膽猜測",
        "theme": "violet",
        "worksheet": "第16週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w16-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：24×3與24×30",
        "prompt": "每包24張紙，買3包和買30包，為甚麼第二題不能只在直式寫72？",
        "sec": "16-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第16週｜3 動手探究",
        "app": {
          "type": "area-multiply",
          "a": 24,
          "b": 3,
          "cases": [
            {
              "label": "24×3",
              "values": {
                "a": 24,
                "b": 3
              }
            },
            {
              "label": "24×30",
              "values": {
                "a": 24,
                "b": 30
              }
            },
            {
              "label": "16×4",
              "values": {
                "a": 16,
                "b": 4
              }
            },
            {
              "label": "16×40",
              "values": {
                "a": 16,
                "b": 40
              }
            },
            {
              "label": "25×2",
              "values": {
                "a": 25,
                "b": 2
              }
            },
            {
              "label": "25×20",
              "values": {
                "a": 25,
                "b": 20
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 用十包綁成一束的圖表示30包",
          "2. 先算3束，再把束換回包數",
          "3. 換數字查這個想法是否仍成立。"
        ]
      },
      {
        "id": "p3-w16-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "16×4與16×40",
        "sec": "16-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第16週｜3 動手探究",
        "app": {
          "type": "area-multiply",
          "a": 16,
          "b": 4,
          "cases": [
            {
              "label": "24×3",
              "values": {
                "a": 24,
                "b": 3
              }
            },
            {
              "label": "24×30",
              "values": {
                "a": 24,
                "b": 30
              }
            },
            {
              "label": "16×4",
              "values": {
                "a": 16,
                "b": 4
              }
            },
            {
              "label": "16×40",
              "values": {
                "a": 16,
                "b": 40
              }
            },
            {
              "label": "25×2",
              "values": {
                "a": 25,
                "b": 2
              }
            },
            {
              "label": "25×20",
              "values": {
                "a": 25,
                "b": 20
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w16-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "25×2與25×20",
        "sec": "16-3",
        "secName": "動手探究",
        "theme": "berry",
        "worksheet": "第16週｜3 動手探究",
        "app": {
          "type": "area-multiply",
          "a": 25,
          "b": 2,
          "cases": [
            {
              "label": "24×3",
              "values": {
                "a": 24,
                "b": 3
              }
            },
            {
              "label": "24×30",
              "values": {
                "a": 24,
                "b": 30
              }
            },
            {
              "label": "16×4",
              "values": {
                "a": 16,
                "b": 4
              }
            },
            {
              "label": "16×40",
              "values": {
                "a": 16,
                "b": 40
              }
            },
            {
              "label": "25×2",
              "values": {
                "a": 25,
                "b": 2
              }
            },
            {
              "label": "25×20",
              "values": {
                "a": 25,
                "b": 20
              }
            }
          ],
          "caseIndex": 4
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w16-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "16-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第16週｜4 數學驗證",
        "app": {
          "type": "area-multiply",
          "a": 24,
          "b": 3,
          "cases": [
            {
              "label": "24×3",
              "values": {
                "a": 24,
                "b": 3
              }
            },
            {
              "label": "24×30",
              "values": {
                "a": 24,
                "b": 30
              }
            },
            {
              "label": "16×4",
              "values": {
                "a": 16,
                "b": 4
              }
            },
            {
              "label": "16×40",
              "values": {
                "a": 16,
                "b": 40
              }
            },
            {
              "label": "25×2",
              "values": {
                "a": 25,
                "b": 2
              }
            },
            {
              "label": "25×20",
              "values": {
                "a": 25,
                "b": 20
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
        "id": "p3-w16-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "計算32×20和45×30，其中一題用拆數法說明。",
        "sec": "16-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第16週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：32×20＝640，45×30＝1350；例如32×2×10。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w16-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "小明把18×40寫成72。用18×4的意思說明少算了甚麼。",
        "sec": "16-4",
        "secName": "數學驗證",
        "theme": "lime",
        "worksheet": "第16週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：18×4＝72，但40是4個十，少算十倍份數，正確720。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w16-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "乘30與乘3的差別，怎樣從位值解釋？",
        "sec": "16-5",
        "secName": "解釋發現",
        "theme": "coral",
        "worksheet": "第16週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w16-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "有人把24×30寫72。以「30包」與「3包」的份數反駁。",
        "sec": "16-5",
        "secName": "解釋發現",
        "theme": "coral",
        "worksheet": "第16週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w16-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "展板每行放28張作品，放20行。求總張數，再用兩個10行的安排驗算。",
        "sec": "16-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第16週｜6 生活應用",
        "app": {
          "type": "area-multiply",
          "a": 28,
          "b": 20
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w16-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "16-6",
        "secName": "生活應用",
        "theme": "ocean",
        "worksheet": "第16週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
