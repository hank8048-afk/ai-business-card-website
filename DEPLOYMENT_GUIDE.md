# 🚀 部署指南 | Deployment Guide

## Quick Start - Deploy to Zeabur

### Step 1: 準備工作 | Preparation

1. **確認檔案完整**
   ```bash
   cd /Users/apple/Downloads/project/website
   ls -la
   ```
   
   應該看到：
   - ✅ index.html
   - ✅ privacy.html
   - ✅ terms-of-service.html
   - ✅ premium.html
   - ✅ assets/ (folder)

2. **測試本地運行**
   ```bash
   # 使用 Python 內建 HTTP server
   python3 -m http.server 8000
   
   # 或使用 Node.js
   npx serve .
   ```
   
   開啟瀏覽器訪問: `http://localhost:8000`

---

## 方案 A: Zeabur 部署 (推薦)

### Why Zeabur?
✅ 專為台灣用戶優化
✅ 中文界面
✅ 快速部署
✅ 免費方案可用

### 部署步驟

1. **註冊 Zeabur**
   - 訪問: https://zeabur.com
   - 使用 GitHub 帳號登入

2. **創建新專案**
   ```bash
   # 安裝 Zeabur CLI (optional)
   curl -fsSL https://zeabur.com/install.sh | bash
   ```

3. **上傳網站**
   - 方法 1: 拖曳整個 `website` 資料夾到 Zeabur
   - 方法 2: 連接 GitHub repository
   - 方法 3: 使用 CLI 部署

4. **設定自訂域名**
   - 在 Zeabur Dashboard 中
   - Settings > Domains
   - 添加: `aimingpian.com`
   - 配置 DNS (下方說明)

---

## 方案 B: Netlify 部署

### 優點
✅ 全球 CDN
✅ 自動 HTTPS
✅ 持續部署

### 部署步驟

1. **安裝 Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **登入**
   ```bash
   netlify login
   ```

3. **部署**
   ```bash
   cd /Users/apple/Downloads/project/website
   netlify deploy --prod --dir .
   ```

4. **設定自訂域名**
   - Netlify Dashboard > Domain Settings
   - Add custom domain: `aimingpian.com`

---

## 方案 C: Vercel 部署

### 優點
✅ 超快速度
✅ Edge Network
✅ 自動優化

### 部署步驟

1. **安裝 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **部署**
   ```bash
   cd /Users/apple/Downloads/project/website
   vercel --prod
   ```

3. **設定域名**
   - Vercel Dashboard > Settings > Domains
   - Add: `aimingpian.com`

---

## 方案 D: GitHub Pages (免費)

### 優點
✅ 完全免費
✅ 與 GitHub 整合

### 部署步驟

1. **創建 GitHub Repository**
   ```bash
   cd /Users/apple/Downloads/project/website
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **推送到 GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/ai-business-card-manager.git
   git branch -M main
   git push -u origin main
   ```

3. **啟用 GitHub Pages**
   - GitHub Repository > Settings > Pages
   - Source: main branch
   - Root directory: `/` (or `/website`)

---

## DNS 設定 (所有平台通用)

### 如果你的域名是 `aimingpian.com`

1. **登入域名註冊商** (如 Namecheap, GoDaddy, Cloudflare)

2. **添加 DNS 記錄**

   **For Zeabur/Netlify/Vercel:**
   ```
   Type: CNAME
   Name: www
   Value: [平台提供的網址]
   
   Type: A
   Name: @
   Value: [平台提供的 IP]
   ```

3. **等待 DNS 傳播** (通常 5-30 分鐘)

4. **啟用 HTTPS** (自動)

---

## 📝 部署前檢查清單

- [ ] 檢查所有連結是否正常
- [ ] 測試語言切換功能
- [ ] 驗證 FAQ 手風琴效果
- [ ] 檢查 mobile 響應式設計
- [ ] 更新聯絡 email 為實際地址
- [ ] 添加 Google Analytics (optional)
- [ ] 設定 robots.txt (optional)
- [ ] 添加 sitemap.xml (optional)

---

## 🔧 上線後優化

### 1. 添加 Google Analytics

在所有 HTML 的 `<head>` 中加入：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. 創建 robots.txt

```
User-agent: *
Allow: /

Sitemap: https://aimingpian.com/sitemap.xml
```

### 3. 創建 sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://aimingpian.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://aimingpian.com/privacy.html</loc>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://aimingpian.com/terms-of-service.html</loc>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://aimingpian.com/premium.html</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 📊 監控與分析

### 建議工具
1. **Google Analytics** - 流量分析
2. **Google Search Console** - SEO 監控
3. **Hotjar** - 使用者行為分析
4. **Uptime Robot** - 網站監控

---

## 🐛 常見問題

### Q: 語言切換不工作？
A: 檢查瀏覽器 Console，確認 `main.js` 正常載入

### Q: 樣式沒有顯示？
A: 確認 Tailwind CSS CDN 連結正常

### Q: 圖片無法顯示？
A: 檢查圖片路徑，確保 `assets/images/` 資料夾存在

### Q: 手機版佈局亂掉？
A: 確認 viewport meta tag 存在

---

## 📞 支援

如有任何部署問題，請聯絡：
- Email: aibusinesscardmanager@gmail.com

---

**祝部署順利！🎉**
