# AI 技術名稱簡化報告

## 📅 更新日期
2025年10月15日

---

## ✅ 修改完成

已將用戶介面的技術名稱簡化，同時保留法律文件中的完整名稱。

---

## 📋 **修改對照表**

| 原始名稱 | 簡化後 | 適用範圍 |
|---------|--------|---------|
| Google Vision AI | **AI OCR 辨識** | 用戶介面 |
| Gemini AI | **AI 智能分析** | 用戶介面 |
| Google Vision AI 和 Gemini AI 雙引擎 | **先進 AI 技術** | 用戶介面 |
| Google AI 技術 | **先進 AI 技術** | 用戶介面 |

---

## 📄 **修改的檔案**

### **index.html（首頁）- 4 處修改**

#### **1. Hero 區域 - Trust Badge（第 166-167 行）**
```
修改前：Google AI 技術
修改後：先進 AI 技術
```

#### **2. 核心功能區（第 440-441 行）**
```
修改前：採用 Google Vision AI，準確辨識中英文名片
修改後：採用 AI OCR 辨識，準確辨識中英文名片
```

#### **3. FAQ 區域 - 語言支援（第 898-899 行）**
```
修改前：採用 Google Vision AI 技術，辨識準確率 95% 以上
修改後：採用先進 AI 技術，辨識準確率 95% 以上
```

#### **4. Why Choose Us 區域（第 1158-1163 行）**
```
修改前：
  標題：Google AI 技術
  內容：採用 Google Vision AI 和 Gemini AI 雙引擎，提供業界領先的 OCR 辨識準確度

修改後：
  標題：先進 AI 技術
  內容：採用先進 AI 技術，提供業界領先的 OCR 辨識準確度
```

---

## 🔐 **未修改的檔案（法律要求）**

### **privacy.html（隱私政策）**

**保留完整名稱（3 處）：**

1. **Google Vision API**（中文版，第 509 行）
   ```
   用途：OCR 名片文字辨識服務（核心功能）
   ```

2. **Google Gemini AI**（中文版，第 548 行）
   ```
   用途：智能名片資料解析（透過 Supabase Edge Function 代理）
   ```

3. **Google Vision AI**（英文版，第 581 行）
   ```
   Purpose: OCR business card recognition
   ```

**保留原因：** 法律文件需要明確揭露使用的第三方服務名稱

---

### **terms-of-service.html（使用條款）**

**保留完整名稱（4 處）：**

1. **服務內容 - 中文版**（第 169 行）
   ```
   AI OCR 辨識：透過 Google Vision AI 自動識別名片文字資訊
   ```

2. **服務內容 - 英文版**（第 188 行）
   ```
   AI OCR Recognition: Automatic text extraction via Google Vision AI
   ```

3. **第三方服務 - 中文版**（第 472 行）
   ```
   本服務整合第三方服務（如 Google Vision AI、RevenueCat、AdMob 等）
   ```

4. **第三方服務 - 英文版**（第 496 行）
   ```
   The Service integrates third-party services (Google Vision AI, RevenueCat, AdMob, etc.)
   ```

**保留原因：** 法律文件需要完整揭露第三方服務提供商

---

## 🎯 **修改原則**

### **用戶介面（index.html）：**
- ✅ **簡化清晰**：避免過度技術性
- ✅ **聚焦價值**：強調功能而非技術細節
- ✅ **易於理解**：一般用戶不需要知道具體技術名稱

### **法律文件（privacy.html、terms-of-service.html）：**
- ✅ **完整揭露**：明確列出第三方服務提供商
- ✅ **法律合規**：符合個資法揭露要求
- ✅ **可追溯性**：用戶可查詢完整的隱私政策

---

## 📊 **修改效果**

### **修改前（過於技術導向）：**
```
❌ "採用 Google Vision AI"
❌ "Google Vision AI 和 Gemini AI 雙引擎"
❌ "Google AI 技術"
```
**問題**：對一般用戶來說過於複雜，不夠親切

### **修改後（用戶友善）：**
```
✅ "採用 AI OCR 辨識"
✅ "採用先進 AI 技術"
✅ "先進 AI 技術"
```
**優點**：簡潔清晰，聚焦於功能價值

---

## 🔍 **驗證結果**

### **index.html 檢查：**
```bash
grep "Google Vision\|Gemini\|Google AI" index.html
# 結果：無匹配（✅ 正確）
```

### **privacy.html 檢查：**
```bash
grep "Google Vision AI\|Google Gemini AI" privacy.html
# 結果：3 處匹配（✅ 正確保留）
```

### **terms-of-service.html 檢查：**
```bash
grep "Google Vision AI" terms-of-service.html
# 結果：4 處匹配（✅ 正確保留）
```

---

## 📝 **修改清單**

| 檔案 | 原始 | 修改後 | 保留/修改 |
|------|------|--------|----------|
| index.html | Google Vision AI | AI OCR 辨識 | ✅ 已修改 |
| index.html | Gemini AI | AI 智能分析 | ✅ 已修改 |
| index.html | Google AI 技術 | 先進 AI 技術 | ✅ 已修改 |
| index.html | 雙引擎 | 先進 AI 技術 | ✅ 已修改 |
| privacy.html | Google Vision API | Google Vision API | ✅ 保留 |
| privacy.html | Google Gemini AI | Google Gemini AI | ✅ 保留 |
| terms-of-service.html | Google Vision AI | Google Vision AI | ✅ 保留 |

---

## 🎯 **最佳實踐**

這次修改遵循了「**分層資訊揭露**」的最佳實踐：

### **第 1 層：用戶介面（簡化）**
```
目的：快速理解、容易記憶
策略：使用通俗易懂的名稱
範例：AI OCR 辨識、先進 AI 技術
```

### **第 2 層：法律文件（完整）**
```
目的：法律合規、完整揭露
策略：明確列出第三方服務商
範例：Google Vision AI、Google Gemini AI
```

### **第 3 層：技術文檔（詳細）**
```
目的：開發者參考
位置：.md 文檔檔案
內容：完整的技術細節和架構
```

---

## ✨ **用戶體驗改善**

### **修改前：**
```
"採用 Google Vision AI 和 Gemini AI 雙引擎，提供業界領先的 OCR 辨識準確度"
```
- ❌ 太長，不易閱讀
- ❌ 過於技術性
- ❌ 分散焦點

### **修改後：**
```
"採用先進 AI 技術，提供業界領先的 OCR 辨識準確度"
```
- ✅ 簡潔有力
- ✅ 聚焦價值（準確度）
- ✅ 易於理解

---

## 🎨 **品牌一致性**

### **統一的技術描述：**
```
✅ AI OCR 辨識（取代 Google Vision AI）
✅ AI 智能分析（取代 Gemini AI）
✅ 先進 AI 技術（統一描述）
✅ 95% 以上辨識準確率（保留具體數據）
```

### **保留的技術背書：**
```
✅ 隱私優先（Trust Badge）
✅ 本地儲存（Trust Badge）
✅ 先進 AI 技術（Trust Badge）
```

---

## 📊 **修改統計**

```
修改檔案：1 個（index.html）
修改位置：4 處
保留檔案：2 個（privacy.html、terms-of-service.html）
保留位置：7 處
```

---

## ✅ **完成狀態**

- ✅ **用戶介面簡化**：已完成
- ✅ **法律文件完整**：已確認
- ✅ **修改驗證**：已通過
- ⏸️ **部署狀態**：暫不部署（依用戶要求）

---

## 🎯 **下一步**

**當你準備好時：**
```bash
cd /Users/apple/Downloads/project/website
git add index.html
git commit -m "簡化 AI 技術名稱：更易理解的用戶介面"
git push origin main
```

**或者如果還需要其他調整，可以繼續修改再一起部署。**

---

**修改完成！已準備就緒，等待你的部署指令。** ✅

