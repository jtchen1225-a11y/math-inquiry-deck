# 驗證紀錄

日期：2026-10-24。版本：2.0 紙本作答與小組共用 iPad。

## 自動化檢查

- 數學：A/B/C/D、固定果汁加水、等比例放大、零水與非法數值、檸檬紅茶、25% 與瓶數。
- 結構：12 頁、五階段、唯一 id、每頁工作紙對照、多種 theme、示範課資產與來源一致。
- 預設主題：accent 對 soft 背景的對比至少 4.5:1；自訂主題支援六位色碼。
- 紙本模式：沒有正式作答表單及匯出按鈕；對儲存 API 的監測確認程式不讀寫作答儲存，不觸發下載。
- 臨時書寫：打字轉義、滑桿／文字框原生按鍵、手寫筆跡、觸控點畫、清除筆跡、同分頁翻頁保留、重新整理清空。
- 實驗：配方加入比較後不隨滑桿變動；比值與整體濃度分開；步驟揭示；數學小法庭引用數據。
- 產生器：review/inquiry 雙模式、五階段骨架、HTML 轉義與禁止意外覆寫。
- 瀏覽器：Chromium 與 WebKit 自動化腳本；1440×1000、1024×768、768×1024、390×844，無整頁水平溢出，目錄可收合。

執行 `node --test tests/model.test.cjs tests/schema.test.cjs`、`python tests/generator_test.py`、`node tests/browser.cjs`。WebKit 設定 `TEST_ENGINE=webkit`；需要對應 Playwright 瀏覽器。CI 通過才部署 GitHub Pages。

## 人工檢視與限制

檢視實驗台、論證頁及 iPad 尺寸畫面；保留可讀字級與頁內捲動。WebKit 模擬驗證不代表已在實體 iPad 或 Apple Pencil 上測試。應在授課設備檢查觸控與投影體驗。

離線結構驗證不能代替真實 DOM 操作。複習模式沿用上游模擬 DOM，其滑桿掃描有上限。論證品質與教材範圍仍由教師覆核。

改 assets 或課程來源後，先執行 `python scripts/build_demo.py`，再跑相關檢查；新增頁型需更新 schema、文件與代表性操作測試。
