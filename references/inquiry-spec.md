# 探究模式規格

## 課程設定

```js
window.DECK_CONFIG = {
  mode: 'inquiry',
  id: 'my-lesson', // 同一課程保持穩定；同網域的不同課程不可共用 id
  version: 2,
  scratchpad: true, // 顯示可展開的臨時打字／手寫區
  phases: ['先判斷','動手調配','記錄數據','提出論證','應用遷移']
};
window.DECK = [{
  ch: 1, title: '生活中的比', color: '#1a365d',
  sections: ['1-1 情境探究'],
  slides: [{
    id: 'initial-claim', kind: 'question', phase: 0,
    sec: '1-1', secName: '情境探究',
    theme: 'citrus', worksheet: '一｜情境判斷',
    title: '你會如何判斷？',
    prompt: '提出有討論空間的真實問題。',
    choices: ['我同意','我不同意','需要更多證據'],
    hint: '先記下理由，稍後用證據檢查。'
  }]
}];
```

每頁必要欄位為 id、kind、phase、sec、secName、title、prompt。phase 為 0–4。探究模式不插入章名分隔頁。保留 ch 與 sections，以沿用原版目錄結構。id 在整份課程中必須唯一。

## 頁型

| kind | 功能 | 適用範圍 |
| --- | --- | --- |
| question | 小組選擇猜想，理由寫在工作紙，可提供 choices | 通用 |
| task | 任務文字與紙本提示 | 通用 |
| practice / rule | 紙本提示與分段揭示 | 通用 |
| argument | 四步論證引導卡，正式內容寫在工作紙 | 通用 |
| annotation | 1 份果汁／4 份清水標註 | 果汁範例專用 |
| lab | 四杯實驗、滑桿、數值切換、本輪配方比較 | 果汁範例專用 |
| representation | 1:4 的五格份數模型 | 果汁範例專用 |
| records | 杯型、配比、比值、總份數、濃度表 | 果汁範例專用 |
| scale | 1:4 等比例放大 | 果汁範例專用 |
| percent | 25% 百格圖與紙本作答提示 | 果汁範例專用 |
| algorithm | 15,000 mL 配比與 800 mL 瓶數任務 | 果汁範例專用 |
| reflection | 回看工作紙初始猜想、自評及離堂題 | 果汁範例專用 |

`reveals: ['提示','證據','解釋']` 為可選字串陣列。課程設定增加 `experiment: 'juice'` 時，argument 頁會顯示可勾選的本輪比較配方。

新增其他科目的互動：在 inquiry.js 的 activity() 新增頁型，對 render() 綁定事件，在 verify_deck.js 的 kinds 加入名稱，必要時新增純模型及測試。原版 review 的 visual(h) 不會在 inquiry 模式自動執行；不要把舊 visual 塞入 task 並預期渲染。

## 頁面配色與工作紙對照

`theme` 可選 citrus（橙）、ocean（藍）、teal（青綠）、lime（草綠）、violet（紫）、coral（珊瑚紅）、berry（莓紅）。未設定時按 phase 選擇；每頁可按內容改色，不必同章同色。

也可設定六位 HEX 色碼物件，例如 `theme: {accent:'#126b9b', soft:'#dff4ff', wash:'#f0faff', ink:'#124861', secondary:'#7544aa'}`；未指定的值使用階段預設。自訂配色須自行檢查對比。phase 流程列保留五階段固定識別色，不把階段或狀態僅用顏色表達。

`worksheet` 指定工作紙位置，會顯示在任務下方。臨時書寫預設收合；課程或單頁的 `scratchpad: false` 可關閉。正式作答欄已移除，演算法題改為分步任務與逐層核對。

## 當次互動狀態

原引擎翻頁會重建 DOM。當次分頁用記憶體維持滑桿、選擇、配方比較、提示及臨時筆記，讓同一次討論能往返頁面；重新整理、關閉或「重新開始本課」即清空。

- 不讀寫 localStorage、sessionStorage 或 IndexedDB，不匯入 v1 舊作答。
- 不建立 Blob 下載，不提供紀錄匯出或後台收集。
- 比較配方是按下「加入比較」時複製的數值，不跟隨後續滑桿改變。
- 文字草稿以安全文字呈現；手寫區用 Pointer Events，支援手指與觸控筆；尺寸變更以相對座標重畫。
- 手寫區收合後仍可在本分頁展開；資料不可跨重新整理保留。
- 教師與學生使用紙本作答，小組共用一部 iPad 輪流操作與報告，不需帳號。

## 版面與相容性

inquiry.css 只覆寫 `.inquiry-mode` 或探究專用類別，不改 review 頁型。iPad 橫向可並排四杯、直向雙欄，小螢幕單欄；各活動標示工作紙位置。長活動可垂直捲動。原導覽、畫筆、雷射筆與全螢幕仍使用 engine.js。探究模式跳過 MathJax 排版，無外部字體請求；若新課程需要 LaTeX，須自行加入依賴並更新離線使用說明。

原引擎深連結 `#p=N` 使用從 0 開始的索引：`#p=2` 是第 3 頁；`#present` 直接進入第一頁。

提示與答案皆在前端，不作保密。原始教學素材與學生匯出資料不得預設納入公開 Repo。
