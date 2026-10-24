# 探究模式規格

## 課程設定

```js
window.DECK_CONFIG = {
  mode: 'inquiry',
  id: 'my-lesson', // 同一課程保持穩定；同網域的不同課程不可共用 id
  version: 1,     // 改變作答欄位或模型時升版；舊版資料不自動遷移
  phases: ['先判斷','動手調配','記錄數據','提出論證','應用遷移']
};
window.DECK = [{
  ch: 1, title: '生活中的比', color: '#1a365d',
  sections: ['1-1 情境探究'],
  slides: [{
    id: 'initial-claim', kind: 'question', phase: 0,
    sec: '1-1', secName: '情境探究',
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
| question | 單選猜想與理由，可選擇提供 choices | 通用 |
| task | 任務文字與作答欄 | 通用 |
| practice / rule | 作答欄與分段提示 | 通用 |
| argument | 四步論證，欄位以頁面 id 隔離 | 通用 |
| annotation | 1 份果汁／4 份清水標註 | 果汁範例專用 |
| lab | 四杯實驗、滑桿、數值切換、數據快照 | 果汁範例專用 |
| representation | 1:4 的五格份數模型 | 果汁範例專用 |
| records | 杯型、配比、比值、總份數、濃度表 | 果汁範例專用 |
| scale | 1:4 等比例放大 | 果汁範例專用 |
| percent | 25% 的百格圖與作答 | 果汁範例專用 |
| algorithm | 15,000 mL 配比與 800 mL 瓶數任務 | 果汁範例專用 |
| reflection | 回看本課初始猜想、自評及離堂題 | 果汁範例專用 |

`reveals: ['提示','證據','解釋']` 為可選字串陣列。課程設定增加 `experiment: 'juice'` 時，argument 頁會顯示可勾選的果汁快照。

新增其他科目的互動：在 inquiry.js 的 activity() 新增頁型，對 render() 綁定事件，在 verify_deck.js 的 kinds 加入名稱，必要時新增純模型及測試。原版 review 的 visual(h) 不會在 inquiry 模式自動執行；不要把舊 visual 塞入 task 並預期渲染。

## 狀態與生命週期

原引擎每次翻頁重建 DOM。Inquiry 模組先保存狀態，再從狀態重建；不可把唯一資料留在 DOM。

- 儲存鍵：`math-inquiry:<id>:v<version>`。
- answers：以欄位 id 保存字串；學生輸入一律轉義呈現。
- reveal：以頁面 id 保存提示層數。
- cups：目前配方；records：按下記錄時複製的數值，兩者分離。
- 同一杯、同一配方重複記錄更新該筆；不同配方新增快照。
- 勾選引用只保存快照 id，不宣稱能自動判斷論證品質。
- 匯出 JSON 含課程 id、時間、作答與快照；無自動上傳、後台、匯入或跨裝置同步。
- localStorage 失敗時降級為記憶體操作，提示匯出；清除只影響本課狀態。

教師以自己的投影裝置示範，學生可配合紙本；若學生各自開啟網址，資料保存在各自裝置，教師不會自動收到。

## 版面與相容性

inquiry.css 只覆寫 `.inquiry-mode` 或探究專用類別，不改 review 頁型。長活動可垂直捲動。原導覽、畫筆、雷射筆與全螢幕仍使用 engine.js。探究模式跳過 MathJax 排版，無外部字體請求；若新課程需要 LaTeX，須自行加入依賴並更新離線使用說明。

原引擎深連結 `#p=N` 使用從 0 開始的索引：`#p=2` 是第 3 頁；`#present` 直接進入第一頁。

提示與答案皆在前端，不作保密。原始教學素材與學生匯出資料不得預設納入公開 Repo。
