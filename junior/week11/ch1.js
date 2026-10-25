window.DECK_CONFIG={"mode": "inquiry", "id": "p3-week11", "version": 4, "ageBand": "p3", "scratchpad": true, "phases": ["生活疑問", "大膽猜測", "動手探究", "數學驗證", "解釋發現", "生活應用"]};
window.DECK=[
  {
    "ch": 1,
    "title": "第11週 周界沿哪裏走",
    "color": "#126b9b",
    "sections": [
      "11-1 生活疑問",
      "11-2 大膽猜測",
      "11-3 動手探究",
      "11-4 數學驗證",
      "11-5 解釋發現",
      "11-6 生活應用"
    ],
    "slides": [
      {
        "id": "p3-w11-life",
        "phase": 0,
        "kind": "question",
        "title": "周界沿哪裏走",
        "prompt": "兩個邊長4厘米的正方形貼合一整條邊。新圖形的周界，會等於兩個周界相加嗎？",
        "sec": "11-1",
        "secName": "生活疑問",
        "theme": "berry",
        "worksheet": "第11週｜1 生活疑問",
        "choices": [
          "我有一個猜想",
          "我需要更多資料",
          "我能想到不同情況"
        ],
        "context": {
          "icon": "🔎",
          "label": "上冊 第18課 認識周界 第81至83頁"
        },
        "hint": "先讀情境，把初步判斷寫在工作紙。先別揭示計算結果。"
      },
      {
        "id": "p3-w11-guess",
        "phase": 1,
        "kind": "question",
        "title": "先提出可檢查的猜想",
        "prompt": "共用邊還在最外圈嗎？我預測周界增加還是減少？",
        "sec": "11-2",
        "secName": "大膽猜測",
        "theme": "lime",
        "worksheet": "第11週｜2 大膽猜測",
        "choices": [
          "我用圖或實物檢查",
          "我用列表或算式檢查",
          "我先找一個可能的反例"
        ],
        "hint": "說出你要保持甚麼不變、只改變哪個條件；同伴先預測再動手。"
      },
      {
        "id": "p3-w11-explore",
        "phase": 2,
        "kind": "junior",
        "title": "動手試：單個邊長4厘米",
        "prompt": "兩個邊長4厘米的正方形貼合一整條邊。新圖形的周界，會等於兩個周界相加嗎？",
        "sec": "11-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第11週｜3 動手探究",
        "app": {
          "type": "boundary",
          "n": 1,
          "length": 4,
          "cases": [
            {
              "label": "單個邊長4厘米",
              "values": {
                "n": 1,
                "length": 4
              }
            },
            {
              "label": "兩個並排拼接",
              "values": {
                "n": 2,
                "length": 4
              }
            },
            {
              "label": "三個排一直線",
              "values": {
                "n": 3,
                "length": 4
              }
            }
          ],
          "caseIndex": 0
        },
        "instructions": [
          "1. 畫兩個正方形並描每個外圈",
          "2. 把兩圖沿一整條邊拼接，重新描最外圈",
          "3. 對照哪些邊消失，逐段求和。"
        ]
      },
      {
        "id": "p3-w11-compare",
        "phase": 2,
        "kind": "junior",
        "title": "改變條件，再查一次",
        "prompt": "兩個並排拼接",
        "sec": "11-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第11週｜3 動手探究",
        "app": {
          "type": "boundary",
          "n": 2,
          "length": 4,
          "cases": [
            {
              "label": "單個邊長4厘米",
              "values": {
                "n": 1,
                "length": 4
              }
            },
            {
              "label": "兩個並排拼接",
              "values": {
                "n": 2,
                "length": 4
              }
            },
            {
              "label": "三個排一直線",
              "values": {
                "n": 3,
                "length": 4
              }
            }
          ],
          "caseIndex": 1
        },
        "hint": "指出與前一頁相比改了哪個量；先預測，再核對。"
      },
      {
        "id": "p3-w11-compare-again",
        "phase": 2,
        "kind": "junior",
        "title": "第三個情況：能延用方法嗎？",
        "prompt": "三個排成一直線",
        "sec": "11-3",
        "secName": "動手探究",
        "theme": "coral",
        "worksheet": "第11週｜3 動手探究",
        "app": {
          "type": "boundary",
          "n": 3,
          "length": 4,
          "cases": [
            {
              "label": "單個邊長4厘米",
              "values": {
                "n": 1,
                "length": 4
              }
            },
            {
              "label": "兩個並排拼接",
              "values": {
                "n": 2,
                "length": 4
              }
            },
            {
              "label": "三個排一直線",
              "values": {
                "n": 3,
                "length": 4
              }
            }
          ],
          "caseIndex": 2
        },
        "hint": "把三次結果記在工作紙原表格；找相同處、不同處及成立條件。"
      },
      {
        "id": "p3-w11-verify",
        "phase": 3,
        "kind": "junior",
        "title": "方法核對：由結果走回題目",
        "prompt": "用圖示、算式或反向檢查核對自己的記錄；不要只說「畫面也是這樣」。",
        "sec": "11-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第11週｜4 數學驗證",
        "app": {
          "type": "boundary",
          "n": 1,
          "length": 4,
          "cases": [
            {
              "label": "單個邊長4厘米",
              "values": {
                "n": 1,
                "length": 4
              }
            },
            {
              "label": "兩個並排拼接",
              "values": {
                "n": 2,
                "length": 4
              }
            },
            {
              "label": "三個排一直線",
              "values": {
                "n": 3,
                "length": 4
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
        "id": "p3-w11-practice1",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 1",
        "prompt": "一個四邊形邊長依次是3、4、5、6厘米，周界多少？寫相加過程。",
        "sec": "11-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第11週｜4 數學驗證",
        "reveals": [
          "先列出已知、未知及單位，用紙上圖示或算式獨立完成。",
          "核對：3＋4＋5＋6＝18厘米。",
          "指出你的方法在哪一步與模型或另一種算法相同。"
        ]
      },
      {
        "id": "p3-w11-practice2",
        "phase": 3,
        "kind": "task",
        "title": "原工作紙練習 2",
        "prompt": "兩個邊長3厘米的正方形並排拼接，求新圖形周界；與原來周界總和比較。",
        "sec": "11-4",
        "secName": "數學驗證",
        "theme": "ocean",
        "worksheet": "第11週｜4 數學驗證",
        "reveals": [
          "先判斷合理範圍，保留中間過程。",
          "核對：新周界18厘米；原來兩個周界共24厘米，減少6厘米。",
          "如果兩種方法不同，找第一個出現差異的步驟。"
        ]
      },
      {
        "id": "p3-w11-explain",
        "phase": 4,
        "kind": "argument",
        "title": "把證據連成理由",
        "prompt": "每條共用邊為甚麼在原來的周界總和中出現兩次？",
        "sec": "11-5",
        "secName": "解釋發現",
        "theme": "citrus",
        "worksheet": "第11週｜5 解釋發現",
        "reveals": [
          "主張：我認為……，成立條件是……。",
          "證據：引用工作紙某一行的圖、數據或操作。",
          "道理：說出為甚麼這個證據支持主張，再請同伴提出質疑。"
        ]
      },
      {
        "id": "p3-w11-counter",
        "phase": 4,
        "kind": "task",
        "title": "數學小法庭：這句話一定對嗎？",
        "prompt": "面積相同的四張小正方形，排成長條或2×2，周界必相同嗎？沿外圈查。",
        "sec": "11-5",
        "secName": "解釋發現",
        "theme": "citrus",
        "worksheet": "第11週｜5 解釋發現",
        "reveals": [
          "先弄清楚「一定」「可能」「同樣」指的是甚麼。",
          "只改一個條件找反例；若找不到，說出你已檢查了哪些情況。",
          "一個反例可推翻「一定」，幾個成功例子則不等於證明所有情況。"
        ]
      },
      {
        "id": "p3-w11-apply",
        "phase": 5,
        "kind": "junior",
        "title": "原工作紙生活應用",
        "prompt": "用4張相同正方形紙卡，分別拼成一長條和一個大正方形。比較外圈長度，為貼邊帶選較省的方案。",
        "sec": "11-6",
        "secName": "生活應用",
        "theme": "teal",
        "worksheet": "第11週｜6 生活應用",
        "app": {
          "type": "boundary",
          "n": 4,
          "length": 1
        },
        "hint": "用模型輔助設計或驗算；答案、單位及取捨理由寫在原工作紙。實測內容須配合真實物件。"
      },
      {
        "id": "p3-w11-transfer",
        "phase": 5,
        "kind": "task",
        "title": "把問題交給下一組",
        "prompt": "改變原題一個條件，寫出新問題與預測。交給同伴操作、找證據，再修正你的說法。",
        "sec": "11-6",
        "secName": "生活應用",
        "theme": "teal",
        "worksheet": "第11週｜6 生活應用",
        "reveals": [
          "先說哪個條件改變，哪些條件保持一致。",
          "要求同伴用不同方法核對，再問「有反例嗎？」「還缺甚麼資料？」。",
          "回看最初猜想：我改了甚麼？哪一項證據令我改變？完成工作紙自評。"
        ]
      }
    ]
  }
];
