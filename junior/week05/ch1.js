window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week05", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第05週 澳門貨幣怎樣湊",
    "color": "#126b9b",
    "sections": [
      "05-1 生活疑問",
      "05-2 大膽猜測",
      "05-3 動手探究",
      "05-4 數學驗證",
      "05-5 解釋發現",
      "05-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w05-life",
        "phase": 0,
        "kind": "question",
        "title": "澳門貨幣怎樣湊",
        "prompt": "用面值10元、20元和50元的模型鈔票付80元，不找續，可以怎樣付？哪種張數最少？",
        "sec": "05-1",
        "secName": "生活疑問",
        "theme": "lime",
        "worksheet": "第05週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第9至11課 澳門的紙幣 貨幣兌換及購物活動 第39至48頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w05-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "我預測有多少種付法？張數最少的付法是甚麼？",
        "sec": "05-2",
        "secName": "大膽猜測",
        "theme": "coral",
        "worksheet": "第05週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w05-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：不用50元",
        "prompt": "用面值10元、20元和50元的模型鈔票付80元，不找續，可以怎樣付？哪種張數最少？",
        "sec": "05-3",
        "secName": "動手探究",
        "theme": "ocean",
        "worksheet": "第05週｜3 動手探究",
        "app": {
          "type": "money",
          "target": 80,
          "cases": [
            {
              "label": "付80元：不用50元",
              "values": {
                "target": 80,
                "counts": [
                  0,
                  0,
                  0
                ],
                "noFifty": true
              }
            },
            {
              "label": "付80元：先用50元",
              "values": {
                "target": 80,
                "counts": [
                  0,
                  0,
                  1
                ],
                "noFifty": false
              }
            },
            {
              "label": "只用10、20元付60元",
              "values": {
                "target": 60,
                "counts": [
                  0,
                  0,
                  0
                ],
                "noFifty": true
              }
            }
          ],
          "counts": [
            0,
            0,
            0
          ],
          "noFifty": true,
          "caseIndex": 0
        },
        "instructions": [
          "1. 用標有面值的紙卡湊80元",
          "2. 先固定50元紙卡張數，再換20元，避免重複",
          "3. 比較付法及張數，互相核對。"
        ]
      },
      {
        "id": "p3-w05-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "用1張50元",
        "sec": "05-3",
        "secName": "動手探究",
        "theme": "ocean",
        "worksheet": "第05週｜3 動手探究",
        "app": {
          "type": "money",
          "target": 80,
          "cases": [
            {
              "label": "付80元：不用50元",
              "values": {
                "target": 80,
                "counts": [
                  0,
                  0,
                  0
                ],
                "noFifty": true
              }
            },
            {
              "label": "付80元：先用50元",
              "values": {
                "target": 80,
                "counts": [
                  0,
                  0,
                  1
                ],
                "noFifty": false
              }
            },
            {
              "label": "只用10、20元付60元",
              "values": {
                "target": 60,
                "counts": [
                  0,
                  0,
                  0
                ],
                "noFifty": true
              }
            }
          ],
          "counts": [
            0,
            0,
            1
          ],
          "noFifty": false,
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w05-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "只用10元和20元，改付60元",
        "sec": "05-3",
        "secName": "動手探究",
        "theme": "ocean",
        "worksheet": "第05週｜3 動手探究",
        "app": {
          "type": "money",
          "target": 60,
          "cases": [
            {
              "label": "付80元：不用50元",
              "values": {
                "target": 80,
                "counts": [
                  0,
                  0,
                  0
                ],
                "noFifty": true
              }
            },
            {
              "label": "付80元：先用50元",
              "values": {
                "target": 80,
                "counts": [
                  0,
                  0,
                  1
                ],
                "noFifty": false
              }
            },
            {
              "label": "只用10、20元付60元",
              "values": {
                "target": 60,
                "counts": [
                  0,
                  0,
                  0
                ],
                "noFifty": true
              }
            }
          ],
          "counts": [
            0,
            0,
            0
          ],
          "noFifty": true,
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w05-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "05-4",
        "secName": "數學驗證",
        "theme": "citrus",
        "worksheet": "第05週｜4 數學驗證",
        "app": {
          "type": "money",
          "target": 80,
          "cases": [
            {
              "label": "付80元：不用50元",
              "values": {
                "target": 80,
                "counts": [
                  0,
                  0,
                  0
                ],
                "noFifty": true
              }
            },
            {
              "label": "付80元：先用50元",
              "values": {
                "target": 80,
                "counts": [
                  0,
                  0,
                  1
                ],
                "noFifty": false
              }
            },
            {
              "label": "只用10、20元付60元",
              "values": {
                "target": 60,
                "counts": [
                  0,
                  0,
                  0
                ],
                "noFifty": true
              }
            }
          ],
          "counts": [
            0,
            0,
            0
          ],
          "noFifty": true,
          "caseIndex": 0
        },
        "instructions": [
          "先遮住核對結果，用第二種方法重做。",
          "指出兩種方法用了哪一個共同的數量關係。"
        ]
      },
      {
        "id": "p3-w05-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "在這個模型中，1張50元可換成多少張10元？若只用20元能剛好換嗎？",
        "sec": "05-4",
        "secName": "數學驗證",
        "theme": "citrus",
        "worksheet": "第05週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：50元換5張10元；只用20元不能剛好換50元。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w05-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "購物共68元，付1張100元。寫找續金額，再用10元、1元模型貨幣設計一種找法。",
        "sec": "05-4",
        "secName": "數學驗證",
        "theme": "citrus",
        "worksheet": "第05週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：找32元，例如3張10元加2個1元模型貨幣。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w05-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "張數多一定代表金額大嗎？舉兩組模型鈔票作比較。",
        "sec": "05-5",
        "secName": "解釋發現",
        "theme": "teal",
        "worksheet": "第05週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w05-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "8張10元與2張50元，哪個張數多、哪個金額大？反駁張數越多金額必越大。",
        "sec": "05-5",
        "secName": "解釋發現",
        "theme": "teal",
        "worksheet": "第05週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w05-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "小店商品每本簿12元、每支筆8元。預算50元，簿和筆都至少買1件，找出兩種買法，核對餘款。",
        "sec": "05-6",
        "secName": "生活應用",
        "theme": "violet",
        "worksheet": "第05週｜6 生活應用",
        "app": {
          "type": "shopping",
          "a": 1,
          "b": 1,
          "target": 50
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w05-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "05-6",
        "secName": "生活應用",
        "theme": "violet",
        "worksheet": "第05週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
