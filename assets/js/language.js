// language.js - Language switcher for OdoNex website

function switchLanguage(lang) {
    let currentPath = window.location.pathname;
    let fileName = currentPath.split('/').pop() || 'index.html';
    let newFile = '';
    
    // Mapping of Arabic to English pages
    const pageMap = {
        'index.html': 'index-en.html',
        'features.html': 'features-en.html',
        'gallery.html': 'gallery-en.html',
        'pricing.html': 'pricing-en.html',
        'contact.html': 'contact-en.html',
        // English to Arabic mapping
        'index-en.html': 'index.html',
        'features-en.html': 'features.html',
        'gallery-en.html': 'gallery.html',
        'pricing-en.html': 'pricing.html',
        'contact-en.html': 'contact.html'
    };
    
    if (lang === 'en') {
        // Switch to English
        newFile = pageMap[fileName] || 'index-en.html';
    } else {
        // Switch to Arabic
        newFile = pageMap[fileName] || 'index.html';
    }
    
    window.location.href = newFile;
}

// Get current language based on URL
function getCurrentLanguage() {
    let path = window.location.pathname;
    return path.includes('-en.html') ? 'en' : 'ar';
}

// Update active state of language buttons and navigation
document.addEventListener('DOMContentLoaded', function() {
    let currentLang = getCurrentLanguage();
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update active navigation link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        let href = link.getAttribute('href');
        
        if (currentLang === 'ar') {
            if (currentPage === href) {
                link.classList.add('active');
            }
        } else {
            // For English pages, compare with -en versions
            if (currentPage === href) {
                link.classList.add('active');
            }
        }
    });
    
    // Set document direction
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
});
