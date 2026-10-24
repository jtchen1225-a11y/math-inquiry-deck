# math-inquiry-deck

以 **先判斷 → 動手調配 → 記錄數據 → 提出論證 → 應用遷移** 為主軸的課堂探究網頁簡報框架。

從 [mathruffian-dot/math-review-deck](https://github.com/mathruffian-dot/math-review-deck) 延伸，保留原版複習模式、章節導覽、畫筆、雷射筆與全螢幕，新增問題導向頁型、分段提示、作答保存與實驗證據引用。內附 **小六數學「果汁濃度與比值的本質」12 頁示範課**。

## 先試用示範課

下載或 clone Repo，進入專案資料夾，執行：

```powershell
python -m http.server 8890
```

開啟 <http://localhost:8890>，按「進入果汁探究課」。也可直接開啟 <http://localhost:8890/demo/juice/>。

示範課已收錄全部資產，**不必 npm install、不需 API key、不需建置**。探究模式不載入 CDN，啟動本機伺服器後可斷網使用。原版複習模式的數學排版仍使用 MathJax CDN。

## 課堂操作

| 頁 | 活動 | 操作 |
| --- | --- | --- |
| 1–2 | 先判斷與審題 | 比較三款標籤，記錄猜想；標註基準量與變數 |
| 3–4 | 動手調配 | A/B/C/D 四杯並排；切換固定果汁、自由調配、比值與濃度 |
| 5–7 | 記錄與歸納 | 實驗快照、等比例放大、分段提示與規律發現 |
| 8 | 數學小法庭 | 引用快照，完成主張、證據、道理與反駁 |
| 9–11 | 應用遷移 | 檸檬紅茶、25% 轉部分比部分、15 公升調配與瓶數 |
| 12 | 反思與自評 | 回看最初判斷、離堂題、三項自我評估 |

- 「記錄這杯」保存快照，後續拖動不會改寫舊配方。
- 「需要提示」逐層揭示，開場不直接呈現結論。
- 作答與操作保存在目前瀏覽器，跨頁與重新整理後保留。
- 「匯出課堂紀錄」下載 JSON；「重設本課」確認後清除此課紀錄。
- ← → 翻頁；輸入框、按鈕與滑桿保留原生按鍵操作。L 雷射筆、P 畫筆、C 清除筆跡。
- 表單較長的探究頁允許頁內捲動，以保留可讀字級。手機使用底部教具列。

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

每節產生五階段骨架。編輯輸出中的 `ch1.js`，替換問題、任務及提示。一般 `question`、`task`、`argument` 頁型可跨主題；果汁實驗等專用頁型需依新課題修改。見 [探究模式規格](references/inquiry-spec.md)。

重新產生內附果汁示範課：

```powershell
python scripts/build_demo.py
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
node --test tests/model.test.cjs tests/schema.test.cjs
python tests/generator_test.py
```

瀏覽器測試另需 Playwright：

```powershell
npm install --no-save --package-lock=false playwright@1.62.1
npx playwright install chromium
# 另一個終端先執行 python -m http.server 8890
node tests/browser.cjs
```

測試預設連線 `http://127.0.0.1:8890`。可用 `BASE_URL`、`PLAYWRIGHT_MODULE`、`BROWSER_EXECUTABLE` 指定網址、套件與瀏覽器位置；`SCREENSHOT_DIR` 可輸出截圖。GitHub Actions 執行數學模型、結構、雙模式產生器及瀏覽器測試。

離線驗證器只檢查探究頁結構，不代替瀏覽器操作；舊複習驗證器使用模擬 DOM，滑桿掃描有上限。詳見 [驗證紀錄](references/validation.md)。

## Repo 結構

```text
assets/                  引擎、樣式、探究互動與數學模型
demo/juice/              可直接播放的完整示範課
examples/juice-lesson.js  課程內容來源
scripts/                 雙模式產生器、示範課重建、驗證器
tests/                   模型、結構、產生器、瀏覽器測試
references/              規格、教師引導、驗證及上游文件
SKILL.md                 AI 製作探究課的工作規則
```

## 資料保存與分享

作答不傳送至伺服器，沒有教師後台、跨裝置同步或多人即時協作。儲存依瀏覽器來源（網域與連接埠）、課程 id、版本區分；更換後不自動帶入舊資料。共用裝置下課前請先匯出，再重設。儲存被禁止時會提示只能暫存，仍可匯出。

參考答案在前端程式內，適合教學揭示，不具考試保密功能。

Repo 或產生的資料夾可放到靜態主機。本次建立 Repo 不會自動開啟 GitHub Pages；參考 [部署文件](references/deploy.md)，服務方案及操作以供應商當時文件為準。

## 授權與來源

MIT。保留原作者 mathruffian-dot 的授權與提交歷史，上游基準提交 `198626115258b6998f044fe94408e1b668c66ee2`。原始學校 Word 文件、學校版頭與學生資料不收錄於 Repo。詳見 [LICENSE](LICENSE) 與 [NOTICE](NOTICE.md)。
