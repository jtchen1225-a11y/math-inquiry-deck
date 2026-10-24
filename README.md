# math-inquiry-deck

以 **先判斷 → 動手調配 → 記錄數據 → 提出論證 → 應用遷移** 為主軸的課堂探究網頁簡報框架。

從 [mathruffian-dot/math-review-deck](https://github.com/mathruffian-dot/math-review-deck) 延伸，保留原版複習模式、章節導覽、畫筆、雷射筆與全螢幕，新增內容主題配色、分段提示、配方比較及臨時打字／手寫。以「一組一部 iPad、正式答案寫在工作紙」設計。內附 **小六數學「果汁濃度與比值的本質」12 頁示範課**。

## 線上使用

**[小一30週六步探究課程](https://jtchen1225-a11y.github.io/math-inquiry-deck/primary/)**：每份工作紙各有一份獨立互動簡報，共30份、300頁。保留六步、原來兩道練習與生活應用，教具包括十格陣、分合盤、平衡、聯動教學鐘、月曆、硬幣、購物、量尺、七巧板、統計及數獨。詳細對照見 [小一教師指南](references/primary-guide.md)。

**[開啟果汁探究課](https://jtchen1225-a11y.github.io/math-inquiry-deck/demo/juice/)** · [網站入口](https://jtchen1225-a11y.github.io/math-inquiry-deck/)

小組用同一部 iPad 操作，學生各自在對應工作紙填寫判斷、數據與論證。

## 本機試用

下載或 clone Repo，進入專案資料夾，執行：

```powershell
python -m http.server 8890
```

開啟 <http://localhost:8890>，按「進入果汁探究課」。也可直接開啟 <http://localhost:8890/demo/juice/>。

示範課已收錄全部資產，**不必 npm install、不需 API key、不需建置**。探究模式不載入 CDN，啟動本機伺服器後可斷網使用。原版複習模式的數學排版仍使用 MathJax CDN。

## 課堂操作

| 頁 | 活動 | 操作 |
| --- | --- | --- |
| 1–2 | 先判斷與審題 | 比較標籤、口頭猜想，在工作紙寫理由並標註基準量 |
| 3–4 | 動手調配 | A/B/C/D 四杯並排；切換固定果汁、自由調配、比值與濃度 |
| 5–7 | 記錄與歸納 | 本輪配方比較、等比例放大、提示與紙本規律發現 |
| 8 | 數學小法庭 | 對照數據，完成紙本主張、證據、道理與反駁 |
| 9–11 | 應用遷移 | 檸檬紅茶、25% 轉部分比部分、15 公升調配與瓶數 |
| 12 | 反思與自評 | 對照工作紙的初始判斷、離堂題與自評 |

- 「加入比較」暫放配方，後續拖動不會改寫比較台；正式數據抄到工作紙。
- 「需要提示」逐層揭示，開場不直接呈現結論。
- 不提供作答儲存或紀錄匯出，重新整理即清空當次操作與臨時書寫。
- 可展開臨時書寫區，使用打字、手指或觸控筆草算；無須完成線上表單。
- 「重新開始本課」確認後清空本輪操作、比較與草稿。
- 每頁自動按內容換色，支援 citrus、ocean、teal、lime、violet、coral、berry 七種主題。
- ← → 翻頁；輸入框、按鈕與滑桿保留原生按鍵操作。L 雷射筆、P 畫筆、C 清除筆跡。
- 表單較長的探究頁允許頁內捲動，以保留可讀字級。iPad 與手機使用底部教具列。

### 數學模型

標籤約定為 **濃縮果汁：清水**；各份等體積，混合體積按可相加計算。

```text
比值       = 果汁份數 ÷ 清水份數
整體濃度   = 果汁份數 ÷ (果汁份數 + 清水份數)
```

1:4 的比值為 0.25，整體濃度為 20%。清水為 0 時，比值未定義，濃度為 100%。液面表示總量；顏色只作示意，並非實際飲品色度量測。25% 對應果汁：清水＝1:3。15,000 mL、1:4 需要果汁 3,000 mL、水 12,000 mL；800 mL 一瓶至少買 4 瓶。

## 製作其他探究課

需要 Python 3.9+；驗證需要 Node.js 18+。

```powershell
python scripts/new_deck.py --mode inquiry --out my-lesson --title "我的數學探究課" --chapters "生活中的比::1-1 情境探究"
node scripts/verify_deck.js my-lesson
python -m http.server 8890 --directory my-lesson
```

每節產生五階段骨架。編輯輸出中的 `ch1.js`，替換問題、任務、提示、`worksheet` 對照位置及 `theme`。一般 `question`、`task`、`argument` 頁型可跨主題；果汁實驗等專用頁型需依新課題修改。見 [探究模式規格](references/inquiry-spec.md)。

重新產生內附果汁示範課：

```powershell
python scripts/build_demo.py
python scripts/build_primary.py
```

從完整課程 JS 建立新版本：

```powershell
python scripts/new_deck.py --mode inquiry --out my-juice --title "果汁探究" --chapters "課堂探究::1-1 情境" --lesson examples/juice-lesson.js
```

`--lesson` 採用 JS 內的完整章節與頁面。輸出已有 `index.html` 時會停止，確定覆寫才加 `--force`；不要重建已填好教材的資料夾。

### 原版複習模式

```powershell
python scripts/new_deck.py --mode review --out review --title "整數運算複習" --chapters "整數::1-1 加減"
node scripts/verify_deck.js review
```

`review` 是預設模式，原 `points`、`formula`、`visual`、`example` 格式繼續有效。參閱 [上游 README](references/upstream-readme.md) 與 [原投影片規格](references/slide-spec.md)。

## 開發與驗證

```powershell
node --test tests/model.test.cjs tests/schema.test.cjs tests/primary.test.cjs
python tests/generator_test.py
```

瀏覽器測試另需 Playwright：

```powershell
npm install --no-save --package-lock=false playwright@1.62.1
npx playwright install chromium webkit
# 另一個終端先執行 python -m http.server 8890
node tests/browser.cjs
node tests/primary-browser.cjs
# WebKit（接近 Safari 的引擎）
$env:TEST_ENGINE="webkit"
node tests/browser.cjs
node tests/primary-browser.cjs
```

測試預設連線 `http://127.0.0.1:8890`。可用 `BASE_URL`、`PLAYWRIGHT_MODULE`、`BROWSER_EXECUTABLE` 指定網址、套件與瀏覽器位置；`SCREENSHOT_DIR` 可輸出截圖。GitHub Actions 執行數學模型、結構、雙模式產生器、Chromium 與 WebKit 瀏覽器測試，再部署 Pages。

離線驗證器只檢查探究頁結構，不代替瀏覽器操作；舊複習驗證器使用模擬 DOM，滑桿掃描有上限。詳見 [驗證紀錄](references/validation.md)。

## Repo 結構

```text
assets/                  引擎、樣式、探究互動與數學模型
lessons/primary/          30週課程原始定義
primary/                 課程入口與30份獨立簡報（共用 assets）
demo/juice/              可直接播放的完整示範課
examples/juice-lesson.js  課程內容來源
scripts/                 雙模式產生器、示範課重建、驗證器
tests/                   模型、結構、產生器、瀏覽器測試
references/              規格、教師引導、驗證及上游文件
SKILL.md                 AI 製作探究課的工作規則
```

## 紙本作答與臨時書寫

正式判斷、數據、四步論證、計算及自評寫在紙本工作紙。網站提供操作、觀察、討論提示與可選草算空間，不是線上作答或收集成績系統。

小組的選擇、滑桿、比較配方、提示進度及臨時文字／筆跡只存在目前分頁的記憶體，可在同一分頁翻頁討論；重新整理或關閉即消失。不讀寫 localStorage、sessionStorage 或 IndexedDB，不提供紀錄匯出、上傳、跨裝置同步。v1 的舊作答不會載入新版。

`scratchpad: false` 可在課程或單頁關閉臨時書寫區。筆跡以相對座標繪製，旋轉 iPad 後保持比例；頁面其他位置仍可正常捲動。

參考答案在前端程式內，適合教學揭示，不具考試保密功能。

## GitHub Pages 部署

此 Repo 已設定 GitHub Pages。main 推送通過模型、產生器、Chromium 及 WebKit 測試後，自動發布入口與 `demo/juice/`。公開網站網址不依賴本機 localhost，學生可直接在 iPad 開啟。

小一課程發布於 `primary/week01/` 至 `primary/week30/`；教師可分享單週網址。每週10頁、六階段，正式答案仍寫在原工作紙。新增或修改教具後須重建兩種示範課，讓共用資產版本一致。

新 fork 如需 Pages，先到 Settings → Pages 選 GitHub Actions，並確認 Actions 可部署至 github-pages 環境。部署流程只打包入口與示範課，不把原始 Word、測試或課堂草稿放入網站。

## 授權與來源

MIT。保留原作者 mathruffian-dot 的授權與提交歷史，上游基準提交 `198626115258b6998f044fe94408e1b668c66ee2`。原始學校 Word 文件、學校版頭與學生資料不收錄於 Repo。詳見 [LICENSE](LICENSE) 與 [NOTICE](NOTICE.md)。
