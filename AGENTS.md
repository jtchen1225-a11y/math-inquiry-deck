# 專案協作規則

- 使用繁體中文撰寫教學內容及說明，保留上游歷史與 LICENSE。
- 開工讀 README、SKILL.md、references/inquiry-spec.md。
- 修改資產後執行 `python scripts/build_demo.py` 同步 demo/juice。
- 同時執行 `python scripts/build_primary.py` 同步30份小一課程；來源為 lessons/primary/lessons.json，不手改產生後的 ch1.js。
- 小一保留原工作紙六步：生活疑問、大膽猜測、動手探究、數學驗證、解釋發現、生活應用；不強套五步。
- 每週保留兩道原練習、生活應用與實物操作；數位量尺與穩定性是模型，不能當成實際量測。
- 執行 tests/primary.test.cjs 及 tests/primary-browser.cjs；新教具要有對應的模型或操作檢查。
- 維持 review 與 inquiry 雙模式，課程來源為 examples/juice-lesson.js。
- 計算集中在 assets/inquiry-model.js，新增模型須有實際數值驗證。
- 問題先於結論，以紙本工作紙作答、一組共用一部 iPad；配方比較與臨時書寫只留於當次分頁記憶體。
- 不加入作答持久儲存或紀錄匯出，保留可選的打字／手寫草算區，文字安全呈現。
- 依內容選擇頁面 theme；維持字色對比，顏色不作唯一訊息。
- 不提交原始 DOCX、學生作答匯出、密鑰或本機工具設定。
- 使用者已授權此公開 Repo 部署 GitHub Pages；main 通過 Chromium／WebKit 檢查後部署。
- 預期 Obsidian vault：`G:\我的雲端硬碟\secondbrain`。建立時 MCP 回報路徑不存在，尚未建立專案筆記；恢復後再同步，勿寫入其他 vault。
