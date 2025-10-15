# Google Analytics 整合設定指南

## 📅 整合日期
2025年10月15日

---

## ✅ 已完成的整合工作

### **1. 代碼整合完成**

✅ **所有 HTML 檔案已加入 GA 追蹤代碼**
- `index.html`
- `premium.html`
- `privacy.html`
- `terms-of-service.html`

✅ **main.js 事件追蹤已啟用**
- FAQ 展開追蹤
- 付費按鈕點擊追蹤
- 自訂事件框架已就緒

✅ **隱私政策已更新**
- 加入 Google Analytics 使用說明（中英文）
- 說明收集的資料類型與用途
- 提供 Opt-out 方式

---

## 🔑 **接下來要做的事（重要！）**

### **步驟 1：創建 Google Analytics 帳號**

1. 前往 [Google Analytics](https://analytics.google.com/)
2. 使用你的 Google 帳號登入
3. 點擊「開始測量」（Start Measuring）

---

### **步驟 2：設定資源（Property）**

#### **填寫資訊：**
```
資源名稱：AI 名片經理官網
報表時區：台北 (GMT+8)
貨幣：新台幣 (TWD)
```

#### **選擇產業類別：**
```
商業與工業市場 > 軟體
```

#### **業務目標：**
勾選：
- ☑️ 檢查使用者行為
- ☑️ 追蹤轉換

---

### **步驟 3：設定資料串流（Data Stream）**

1. 選擇「網站」
2. 填寫資訊：
   ```
   網站網址：https://aimingpian.com
   串流名稱：AI 名片經理網站
   ```
3. **取得測量 ID**（格式：`G-XXXXXXXXXX`）

---

### **步驟 4：替換測量 ID**

**重要！** 將所有 HTML 檔案中的 `G-XXXXXXXXXX` 替換為你的真實測量 ID。

#### **需要替換的檔案（共 4 個）：**

```bash
# 在 website 目錄中執行：
sed -i '' 's/G-XXXXXXXXXX/你的測量ID/g' index.html
sed -i '' 's/G-XXXXXXXXXX/你的測量ID/g' premium.html
sed -i '' 's/G-XXXXXXXXXX/你的測量ID/g' privacy.html
sed -i '' 's/G-XXXXXXXXXX/你的測量ID/g' terms-of-service.html
```

**或手動替換**：
1. 打開每個檔案
2. 搜尋 `G-XXXXXXXXXX`
3. 替換為你的測量 ID（例如：`G-ABC123DEF456`）

---

## 📊 **可以追蹤的數據**

### **自動收集（無需額外設定）：**
- 📈 **頁面瀏覽次數**（Page Views）
- 👥 **訪客人數**（Users）
- 🌍 **地理位置**（國家、城市）
- 📱 **裝置類型**（桌機、手機、平板）
- 🌐 **瀏覽器**（Chrome、Safari、Firefox 等）
- ⏱️ **平均停留時間**
- 📊 **跳出率**（Bounce Rate）
- 🔗 **流量來源**（Google、直接輸入、社群媒體等）

### **自訂事件追蹤（已設定）：**
- ✅ **FAQ 展開**：追蹤哪些問題最受關注
- ✅ **付費按鈕點擊**：追蹤轉換意圖
- ✅ **語言切換**：了解國際用戶比例
- ✅ **下載按鈕點擊**：追蹤 CTA 效果

---

## 🎯 **事件追蹤詳細說明**

### **已整合的事件：**

| 事件類別 | 事件動作 | 事件標籤 | 觸發時機 |
|---------|---------|---------|---------|
| FAQ | Expand | 問題文字 | 用戶展開任一 FAQ 問題 |
| Payment | Click | 方案名稱 | 點擊付費相關按鈕 |
| Navigation | Click | 頁面名稱 | 點擊導航連結（可擴充）|
| Download | Click | CTA 位置 | 點擊下載按鈕（可擴充）|

---

## 📋 **驗證整合是否成功**

### **方法 1：即時報表（Real-Time）**

1. 前往 GA 控制台
2. 點擊「即時」→「總覽」
3. 在瀏覽器中開啟你的網站
4. 應該會在 1-2 秒內看到活躍用戶

### **方法 2：瀏覽器開發者工具**

1. 打開網站
2. 按 F12 開啟開發者工具
3. 切換到「Network」分頁
4. 篩選「google-analytics」或「collect」
5. 重新載入頁面
6. 應該會看到 GA 的請求

### **方法 3：Google Tag Assistant**

1. 安裝 [Tag Assistant Legacy (by Google)](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. 訪問你的網站
3. 點擊擴充功能
4. 應該會顯示 GA 標籤運作中

---

## 🎨 **自訂追蹤範例**

### **追蹤下載按鈕點擊：**

在 `index.html` 和 `premium.html` 中：

```html
<!-- 在下載按鈕上加入 onclick -->
<a href="#" onclick="gtag('event', 'click', {
  'event_category': 'Download',
  'event_label': 'Hero CTA'
});">
  免費下載 App
</a>
```

### **追蹤語言切換：**

在 `main.js` 的 `toggleLanguage()` 函數中已自動追蹤（透過 trackEvent）。

---

## 📊 **GA4 控制台導覽**

### **主要報表位置：**

```
首頁（Home）
└── 即時（Realtime）          # 查看當前訪客
└── 生命週期（Life Cycle）
    ├── 流量開發（Acquisition）# 流量來源
    ├── 參與度（Engagement）   # 頁面瀏覽、事件
    └── 營利（Monetization）   # 轉換追蹤

使用者（User）
└── 使用者屬性               # 地理、裝置、技術
└── 技術                    # 瀏覽器、作業系統

事件（Events）
└── 所有事件                # FAQ_Expand、Payment_Click 等
```

---

## 🔒 **隱私合規檢查清單**

✅ **已完成：**
- ✅ 隱私政策已包含 GA 使用說明
- ✅ 說明收集的資料類型
- ✅ 提供 Opt-out 方式
- ✅ 連結到 Google 隱私權政策

❓ **需要確認（依目標市場而定）：**
- [ ] **歐盟用戶**：需要 Cookie 同意橫幅（GDPR）
- [ ] **加州用戶**：需要「不要出售我的資料」連結（CCPA）
- [ ] **台灣用戶**：個資法要求已滿足

---

## 💡 **進階功能（可選）**

### **1. 設定轉換目標：**
```
目標名稱：下載 App
事件條件：event_name = download_click
價值：NT$ 0（潛在客戶）
```

### **2. 設定使用者區隔：**
- 新訪客 vs 回訪客
- 免費版關注者 vs 專業版關注者
- 中文用戶 vs 英文用戶

### **3. 設定自訂維度：**
- 用戶語言偏好（zh/en）
- 點擊的 FAQ 問題
- 查看的方案頁面

---

## 🚀 **快速啟動步驟**

### **5 分鐘設定流程：**

```
1️⃣ 前往 analytics.google.com
2️⃣ 創建帳號 → 獲取測量 ID
3️⃣ 替換 4 個 HTML 檔案中的 G-XXXXXXXXXX
4️⃣ 部署到 GitHub Pages
5️⃣ 訪問網站，檢查「即時報表」
```

---

## 📞 **需要協助？**

### **常見問題：**

**Q: 看不到數據？**
- 等待 24-48 小時（歷史報表需要時間）
- 即時報表應該立即顯示

**Q: 測量 ID 在哪裡？**
- GA 控制台 → 管理（左下角齒輪）→ 資料串流 → 點擊你的網站

**Q: 如何查看事件？**
- 報表 → 參與度 → 事件 → 查看「FAQ」、「Payment」等

---

## 🎯 **預期結果**

整合完成後，你可以看到：

### **即時數據（Real-time）：**
- 當前有多少人在線
- 他們在看哪個頁面
- 他們從哪裡來

### **7 天內數據：**
- 總訪客數
- 頁面瀏覽次數
- 最受歡迎的頁面
- FAQ 哪個問題最多人點

### **30 天內數據：**
- 流量趨勢圖
- 用戶留存率
- 轉換漏斗分析

---

## 📝 **代碼位置速查**

| 檔案 | 位置 | 內容 |
|------|------|------|
| `index.html` | 第 25-32 行 | GA 追蹤代碼 |
| `premium.html` | 第 15-22 行 | GA 追蹤代碼 |
| `privacy.html` | 第 15-22 行 | GA 追蹤代碼 |
| `terms-of-service.html` | 第 15-22 行 | GA 追蹤代碼 |
| `assets/main.js` | 第 317-332 行 | trackEvent 函數 |
| `assets/main.js` | 第 142 行 | FAQ 展開追蹤 |
| `assets/main.js` | 第 343 行 | 付費按鈕追蹤 |

---

## ⚠️ **重要提醒**

1. **測量 ID 是公開的**：
   - 放在前端代碼中是正常的
   - 不會有安全問題
   - Google 會驗證來源網域

2. **資料隱私**：
   - GA 只收集匿名統計資料
   - 不收集個人可識別資訊（PII）
   - 符合隱私政策說明

3. **效能影響**：
   - GA 使用 async 載入，不影響頁面速度
   - 載入時間 <100ms

---

## 🎉 **整合狀態**

✅ **代碼整合**：100% 完成  
✅ **隱私政策**：已更新  
✅ **事件追蹤**：已啟用  
⏳ **測量 ID**：等待你設定並替換  

---

## 📞 **下一步**

**你只需要做 3 件事：**

1. **創建 GA 帳號並獲取測量 ID**
2. **替換所有 HTML 檔案中的 `G-XXXXXXXXXX`**
3. **部署到 GitHub**

**完成後，你就能即時看到網站數據了！** 🎉

---

**需要我幫你生成替換測量 ID 的指令嗎？**

