/**
 * Main JavaScript for AI Business Card Manager Website
 * Handles language switching, mobile menu, FAQ accordion, and animations
 */

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initLanguageToggle();
    initMobileMenu();
    initFAQ();
    initAnimations();
    initNavbarScroll();
    initSmoothScroll();
    initCounters();
    initParallax();
    initButtonRipple();
    
    // Log for debugging
    console.log('✅ AI Business Card Manager website initialized');
});

/**
 * Language Toggle Functionality
 * Switches between Chinese (zh) and English (en)
 */
function initLanguageToggle() {
    // Get current language from localStorage or default to 'zh'
    let currentLang = localStorage.getItem('language') || 'zh';
    setLanguage(currentLang);
    
    // Desktop language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Mobile language toggle
    const langToggleMobile = document.getElementById('langToggleMobile');
    if (langToggleMobile) {
        langToggleMobile.addEventListener('click', toggleLanguage);
    }
}

function toggleLanguage() {
    const currentLang = document.body.getAttribute('data-lang') || 'zh';
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
    
    // Save to localStorage
    localStorage.setItem('language', newLang);
    
    console.log(`🌐 Language switched to: ${newLang}`);
}

function setLanguage(lang) {
    document.body.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-TW' : 'en');
    
    // Update all language-specific elements
    const zhElements = document.querySelectorAll('.lang-zh');
    const enElements = document.querySelectorAll('.lang-en');
    
    if (lang === 'zh') {
        zhElements.forEach(el => el.classList.remove('hidden'));
        enElements.forEach(el => el.classList.add('hidden'));
    } else {
        zhElements.forEach(el => el.classList.add('hidden'));
        enElements.forEach(el => el.classList.remove('hidden'));
    }
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = this.querySelector('svg path');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                } else {
                    icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                }
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

/**
 * FAQ Accordion Functionality
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-answer')?.classList.remove('active');
                        otherItem.querySelector('.faq-question svg')?.classList.remove('rotate-180');
                    }
                });
                
                // Toggle current item
                answer.classList.toggle('active');
                const svg = question.querySelector('svg');
                if (svg) {
                    svg.classList.toggle('rotate-180');
                }
                
                // Display answer
                if (answer.classList.contains('active')) {
                    answer.style.display = 'block';
                } else {
                    answer.style.display = 'none';
                }
            });
        }
    });
}

/**
 * Initialize AOS (Animate On Scroll) Library
 */
function initAnimations() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
        });
        console.log('✨ AOS animations initialized');
    }
}

/**
 * Navbar Scroll Effect
 * Adds shadow to navbar when scrolling
 */
function initNavbarScroll() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#' || href === '#download') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Highlight Current Page in Navigation
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        if (linkPath === currentPath) {
            link.classList.add('text-blue-600', 'font-semibold');
        }
    });
}

// Call on load
highlightCurrentPage();

/**
 * Form Validation (for future contact forms)
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Copy to Clipboard Utility
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showNotification('Copied to clipboard!', 'success');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

/**
 * Show Notification (Toast)
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 px-6 py-4 rounded-lg shadow-lg z-50 transition-all transform translate-x-0 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

/**
 * Lazy Load Images (for better performance)
 */
function initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Detect if user is on mobile device
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Track Analytics (Placeholder for future integration)
 * TODO: Integrate Google Analytics or similar
 */
function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    console.log(`📊 Track Event: ${category} - ${action} - ${label}`);
    
    // Example for Google Analytics (uncomment when ready)
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

/**
 * Handle Payment Button Clicks (Placeholder)
 * TODO: Integrate RevenueCat or Stripe API
 */
function handlePaymentClick(plan) {
    console.log(`💳 Payment clicked for plan: ${plan}`);
    showNotification('Payment integration coming soon!', 'info');
    
    // Track the event
    trackEvent('Payment', 'Click', plan);
    
    // TODO: Open payment modal or redirect to payment page
    // Example:
    // if (typeof Stripe !== 'undefined') {
    //     openStripeCheckout(plan);
    // }
}

// Attach payment handlers if on premium page
if (window.location.pathname.includes('premium.html')) {
    const paymentButtons = document.querySelectorAll('[data-plan]');
    paymentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            handlePaymentClick(plan);
        });
    });
}

/**
 * Newsletter Subscription (Placeholder)
 */
function subscribeNewsletter(email) {
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // TODO: Implement newsletter subscription
    console.log(`📧 Newsletter subscription for: ${email}`);
    showNotification('Thank you for subscribing!', 'success');
}

/**
 * Auto-detect user's preferred language
 */
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (browserLang.startsWith('zh')) {
        return 'zh';
    } else {
        return 'en';
    }
}

// Set initial language based on browser if not set
if (!localStorage.getItem('language')) {
    const detectedLang = detectLanguage();
    localStorage.setItem('language', detectedLang);
    setLanguage(detectedLang);
}

/**
 * Handle Back to Top Button
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize back to top
initBackToTop();

/**
 * Preload Critical Images
 */
function preloadImages() {
    const imagesToPreload = [
        'assets/images/app-mockup.png',
        'assets/images/favicon.svg'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Preload on load
window.addEventListener('load', preloadImages);

/**
 * Service Worker Registration (for PWA - future enhancement)
 */
if ('serviceWorker' in navigator) {
    // Uncomment when ready to implement PWA
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/service-worker.js')
    //         .then(reg => console.log('Service Worker registered'))
    //         .catch(err => console.log('Service Worker registration failed'));
    // });
}

/**
 * Counter Animation
 * Animates numbers on scroll
 */
function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    if (counters.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-counter'));
                const duration = 2000; // 2 seconds
                const step = targetValue / (duration / 16); // 60 FPS
                let current = 0;
                
                target.classList.add('counted');
                
                const counter = setInterval(() => {
                    current += step;
                    if (current >= targetValue) {
                        target.textContent = targetValue.toLocaleString();
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(current).toLocaleString();
                    }
                }, 16);
                
                counterObserver.unobserve(target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => counterObserver.observe(counter));
}

/**
 * Parallax Scrolling Effect
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                parallaxElements.forEach(el => {
                    const speed = el.getAttribute('data-parallax') || 0.5;
                    const yPos = -(window.pageYOffset * speed);
                    el.style.transform = `translateY(${yPos}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Button Ripple Effect
 */
function initButtonRipple() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/**
 * Scroll Progress Indicator
 */
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        width: 0%;
        z-index: 9999;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
initScrollProgress();

/**
 * Enhanced Smooth Reveal on Scroll
 */
function initRevealOnScroll() {
    const reveals = document.querySelectorAll('[data-reveal]');
    
    if (reveals.length === 0) return;
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    reveals.forEach(reveal => {
        reveal.classList.add('reveal-hidden');
        revealObserver.observe(reveal);
    });
}

// Initialize reveal on scroll
initRevealOnScroll();

/**
 * Dynamic CTA Highlight
 * Highlights CTA buttons when user scrolls to bottom
 */
function initDynamicCTA() {
    const ctaButtons = document.querySelectorAll('[href="#download"]');
    let hasHighlighted = false;
    
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        if (scrollPercentage > 60 && !hasHighlighted) {
            ctaButtons.forEach(btn => {
                btn.classList.add('animate-pulse-slow');
            });
            hasHighlighted = true;
        }
    });
}

// Initialize dynamic CTA
initDynamicCTA();

/**
 * Image Lazy Load with Blur Effect
 */
function initImageLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize image lazy load
initImageLazyLoad();

console.log('🚀 AI Business Card Manager - Website Ready!');
