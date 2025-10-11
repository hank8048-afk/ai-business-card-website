# AI 名片經理 Landing Website
## AI Business Card Manager Official Website

A professional, bilingual (中文/English) landing website for the AI Business Card Manager mobile application.

---

## 🌐 Live Website
- **Domain**: https://aimingpian.com (placeholder)
- **Deployment Platform**: Zeabur (recommended)

---

## 📁 File Structure

```
website/
├── index.html              # Home page with features, testimonials, FAQ
├── privacy.html            # Privacy Policy (bilingual)
├── terms-of-service.html   # Terms of Use (bilingual)
├── premium.html            # Premium pricing & paywall placeholder
├── assets/
│   ├── styles.css          # Custom CSS styles
│   ├── main.js             # JavaScript for language toggle & interactions
│   └── images/
│       ├── favicon.svg     # Website favicon
│       ├── app-mockup.png  # App screenshot mockup (placeholder)
│       └── preview.png     # Open Graph preview image (placeholder)
└── README.md               # This file
```

---

## 🎨 Features

### ✅ Responsive Design
- Mobile-first layout
- Tablet and desktop optimized
- Modern UI with Tailwind CSS

### 🌍 Bilingual Support
- 中文 (Traditional Chinese) / English
- Language toggle button
- Persistent language preference (localStorage)

### 📄 Pages
1. **Home** (`index.html`)
   - Hero section with CTAs
   - Features showcase
   - How it works (3-step process)
   - FAQ section
   - Testimonials
   - Download links (App Store & Google Play)

2. **Privacy Policy** (`privacy.html`)
   - Bilingual two-column layout
   - Data collection & security
   - User rights
   - Contact information

3. **Terms of Use** (`terms-of-service.html`)
   - Service scope
   - Prohibited activities
   - Intellectual property
   - Disclaimer & liability

4. **Premium** (`premium.html`)
   - Pricing plans (Free, Pro) - Enterprise removed as not planned for short term
   - Feature comparison table
   - Payment integration placeholder (Stripe/RevenueCat)

---

## 🚀 Deployment

### Deploy to Zeabur

1. **Install Zeabur CLI**:
   ```bash
   npm install -g zeabur
   ```

2. **Initialize Project**:
   ```bash
   cd website
   zeabur init
   ```

3. **Deploy**:
   ```bash
   zeabur deploy
   ```

### Alternative: Deploy to Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   cd website
   netlify deploy --prod
   ```

### Alternative: Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd website
   vercel --prod
   ```

---

## 🛠️ Customization

### Update Contact Email
Replace `aibusinesscardmanager@gmail.com` throughout the site with your actual email.

### Add App Store Links
Update the download links in `index.html`:
```html
<!-- Replace # with actual App Store URLs -->
<a href="https://apps.apple.com/..." >App Store</a>
<a href="https://play.google.com/..." >Google Play</a>
```

### Update Domain
1. Update `og:url` meta tag in all HTML files
2. Update preview image URLs
3. Configure custom domain in your hosting platform

---

## 📱 Mobile App Features

The website showcases the following app features:
- ✅ AI-Powered OCR (Google Vision AI)
- ✅ Multi-language support (中英文)
- ✅ Smart contact parsing
- ✅ Secure local storage (encrypted with AES-256)
- 💎 Cloud sync (Premium feature - coming soon)
- ✅ Folder organization
- ✅ Data export (JSON/CSV)
- ✅ System-level encryption (SecureStore + SHA-256 obfuscation)

---

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styles + Tailwind CSS CDN
- **JavaScript**: Vanilla JS (no framework dependencies)
- **Libraries**:
  - Tailwind CSS (via CDN)
  - AOS (Animate On Scroll)
  - Google Fonts (Inter)

---

## 🌟 SEO Optimization

### Meta Tags Included
- ✅ Title & Description
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Card
- ✅ Favicon
- ✅ Viewport settings

### Performance
- Lazy loading ready
- Image optimization placeholders
- Minified CSS/JS ready for production

---

## 📝 TODO: Future Enhancements

### Payment Integration
```javascript
// TODO: integrate RevenueCat or Stripe API
// Location: premium.html + assets/main.js
```

**Options**:
1. **Stripe** - Credit card payments
2. **RevenueCat** - Subscription management
3. **Paddle** - Merchant of record

### Analytics
```javascript
// TODO: Add Google Analytics or Plausible
```

### Newsletter
```javascript
// TODO: Integrate Mailchimp or ConvertKit
```

### Progressive Web App (PWA)
- [ ] Add `manifest.json`
- [ ] Implement Service Worker
- [ ] Enable offline mode

---

## 📞 Contact & Support

- **Email**: aibusinesscardmanager@gmail.com
- **Website**: https://aimingpian.com
- **App**: AI 名片經理 / AI Business Card Manager

---

## 📄 License

© 2025 AI Business Card Manager. All rights reserved.

---

## 🙏 Credits

- **Design**: Modern, professional UI
- **Icons**: Heroicons (via Tailwind)
- **Fonts**: Inter (Google Fonts)
- **Animation**: AOS Library
- **Hosting**: Zeabur (recommended)

---

## 🐛 Bug Reports

If you find any issues, please report them to:
aibusinesscardmanager@gmail.com

---

**Built with ❤️ for professional networking**
