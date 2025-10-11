# ⚡ Quick Start Guide

## 🚀 5 分鐘快速上線

### Step 1: 測試本地 (30 秒)
```bash
cd /Users/apple/Downloads/project/website
python3 -m http.server 8000
```
開啟瀏覽器：http://localhost:8000

---

### Step 2: 上傳到 Zeabur (2 分鐘)

1. 訪問 https://zeabur.com
2. 登入 (使用 GitHub)
3. 點擊 "New Project"
4. 拖曳 `website` 資料夾
5. 等待部署完成
6. 完成！🎉

---

### Step 3: 綁定域名 (2 分鐘)

1. Zeabur Dashboard > Settings > Domains
2. 輸入：`aimingpian.com`
3. 複製提供的 DNS 設定
4. 到你的域名商設定 DNS
5. 等待 5-30 分鐘生效

---

## ✅ 檢查清單

### 部署前
- [ ] 更新聯絡 email
- [ ] 添加 App Store 連結
- [ ] 上傳真實 App 截圖
- [ ] 測試所有頁面

### 部署後
- [ ] 測試語言切換
- [ ] 測試手機版
- [ ] 檢查所有連結
- [ ] 設定 Google Analytics

---

## 📱 頁面一覽

| 頁面 | 網址 | 用途 |
|------|------|------|
| 🏠 首頁 | `/` or `/index.html` | 主要著陸頁 |
| 🔒 隱私 | `/privacy.html` | 隱私權政策 |
| ⚖️ 條款 | `/terms-of-service.html` | 使用條款 |
| 💎 專業版 | `/premium.html` | 付費方案 |

---

## 🎨 功能速覽

✅ **語言切換**：右上角按鈕
✅ **手機選單**：點擊漢堡圖示
✅ **FAQ 展開**：點擊問題
✅ **平滑捲動**：導航錨點
✅ **動畫效果**：自動觸發

---

## 🔧 快速修改

### 更改聯絡 Email
```bash
# 搜尋並替換
grep -r "aibusinesscardmanager@gmail.com" . --include="*.html"
```

### 更改主色調
```css
/* assets/styles.css */
:root {
    --primary-color: #3b82f6;  /* 改成你要的顏色 */
}
```

### 添加 Google Analytics
```html
<!-- 在 <head> 中加入 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
```

---

## 📞 遇到問題？

1. **查看文件**：`README.md`, `DEPLOYMENT_GUIDE.md`
2. **測試本地**：`TEST_LOCALLY.txt`
3. **聯絡支援**：aibusinesscardmanager@gmail.com

---

## 🎯 關鍵檔案

- `index.html` → 首頁
- `assets/main.js` → 語言切換邏輯
- `assets/styles.css` → 自訂樣式
- `DEPLOYMENT_GUIDE.md` → 完整部署說明

---

**就這麼簡單！開始使用吧！** 🚀
