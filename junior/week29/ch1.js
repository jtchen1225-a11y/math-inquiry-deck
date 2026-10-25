window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week29", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第29週 同一數據不同刻度",
    "color": "#126b9b",
    "sections": [
      "29-1 生活疑問",
      "29-2 大膽猜測",
      "29-3 動手探究",
      "29-4 數學驗證",
      "29-5 解釋發現",
      "29-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w29-life",
        "phase": 0,
        "kind": "question",
        "title": "同一數據不同刻度",
        "prompt": "三組回收鋁罐40、70、90個，圖只有10格高。每格代表1個夠用嗎？刻度改了，罐數會變嗎？",
        "sec": "29-1",
        "secName": "生活疑問",
        "theme": "citrus",
        "worksheet": "第29週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "下冊 第44至45課 認識及製作棒形圖 第83至92頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w29-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我會選每格5個還是10個？三條棒要多高？",
        "sec": "29-2",
        "secName": "大膽猜測",
        "theme": "teal",
        "worksheet": "第29週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w29-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：甲組40個",
        "prompt": "三組回收鋁罐40、70、90個，圖只有10格高。每格代表1個夠用嗎？刻度改了，罐數會變嗎？",
        "sec": "29-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第29週｜3 動手探究",
        "app": {
          "type": "chart",
          "unit": 1,
          "cases": [
            {
              "label": "每格1個：能放下嗎",
              "values": {
                "unit": 1
              }
            },
            {
              "label": "每格5個",
              "values": {
                "unit": 5
              }
            },
            {
              "label": "每格10個",
              "values": {
                "unit": 10
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 試算兩種刻度所需格數，選能放下全圖的一種",
          "2. 在圖上標題、組別、單位與刻度，再畫棒",
          "3. 同伴由圖讀回數據，核對原表。"
        ]
      },
      {
        "id": "p3-w29-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "乙組70個",
        "sec": "29-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第29週｜3 動手探究",
        "app": {
          "type": "chart",
          "unit": 5,
          "cases": [
            {
              "label": "每格1個：能放下嗎",
              "values": {
                "unit": 1
              }
            },
            {
              "label": "每格5個",
              "values": {
                "unit": 5
              }
            },
            {
              "label": "每格10個",
              "values": {
                "unit": 10
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w29-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "丙組90個",
        "sec": "29-3",
        "secName": "動手探究",
        "theme": "violet",
        "worksheet": "第29週｜3 動手探究",
        "app": {
          "type": "chart",
          "unit": 10,
          "cases": [
            {
              "label": "每格1個：能放下嗎",
              "values": {
                "unit": 1
              }
            },
            {
              "label": "每格5個",
              "values": {
                "unit": 5
              }
            },
            {
              "label": "每格10個",
              "values": {
                "unit": 10
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w29-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "29-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第29週｜4 數學驗證",
        "app": {
          "type": "chart",
          "unit": 1,
          "cases": [
            {
              "label": "每格1個：能放下嗎",
              "values": {
                "unit": 1
              }
            },
            {
              "label": "每格5個",
              "values": {
                "unit": 5
              }
            },
            {
              "label": "每格10個",
              "values": {
                "unit": 10
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
        "id": "p3-w29-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "若每格5人，棒高6格表示多少人？25人應畫幾格？寫反查算式。",
        "sec": "29-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第29週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：6×5＝30人；25÷5＝5格。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w29-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "丁組回收45個，每格10個時要畫幾格？若不想用半格，可另選甚麼刻度？",
        "sec": "29-4",
        "secName": "數學驗證",
        "theme": "berry",
        "worksheet": "第29週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：45÷10＝4.5格；可用每格5個，畫9格。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w29-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "兩張圖的刻度不同，能只比較棒的高度嗎？用同一數據說明。",
        "sec": "29-5",
        "secName": "解釋發現",
        "theme": "lime",
        "worksheet": "第29週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w29-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "同一數據換刻度後棒更矮，是數量減少嗎？由圖讀回數據作反證。",
        "sec": "29-5",
        "secName": "解釋發現",
        "theme": "lime",
        "worksheet": "第29週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w29-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "給班長寫回收建議：比較最多與最少相差多少，求三組總數，再自訂一個可由圖回答的問題並作答。",
        "sec": "29-6",
        "secName": "生活應用",
        "theme": "coral",
        "worksheet": "第29週｜6 生活應用",
        "app": {
          "type": "chart",
          "unit": 10,
          "cases": [
            {
              "label": "每格1個：能放下嗎",
              "values": {
                "unit": 1
              }
            },
            {
              "label": "每格5個",
              "values": {
                "unit": 5
              }
            },
            {
              "label": "每格10個",
              "values": {
                "unit": 10
              }
            }
          ]
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w29-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "29-6",
        "secName": "生活應用",
        "theme": "coral",
        "worksheet": "第29週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
