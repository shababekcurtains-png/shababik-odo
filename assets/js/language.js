// language.js - التبديل بين العربية والإنجليزية

function switchLanguage(lang) {
    let currentPath = window.location.pathname;
    let fileName = currentPath.split('/').pop() || 'index.html';
    let newFile = '';
    
    // قائمة الصفحات المدعومة
    const pages = {
        'ar': {
            'index.html': 'index.html',
            'features.html': 'features.html',
            'gallery.html': 'gallery.html',
            'pricing.html': 'pricing.html',
            'contact.html': 'contact.html'
        },
        'en': {
            'index.html': 'index-en.html',
            'features.html': 'features-en.html',
            'gallery.html': 'gallery-en.html',
            'pricing.html': 'pricing-en.html',
            'contact.html': 'contact-en.html',
            'index-en.html': 'index-en.html',
            'features-en.html': 'features-en.html',
            'gallery-en.html': 'gallery-en.html',
            'pricing-en.html': 'pricing-en.html',
            'contact-en.html': 'contact-en.html'
        }
    };
    
    if (lang === 'en') {
        newFile = pages.en[fileName] || 'index-en.html';
    } else {
        let baseName = fileName.replace('-en.html', '.html');
        newFile = pages.ar[baseName] || 'index.html';
    }
    
    window.location.href = newFile;
}

// تحديد اللغة الحالية
function getCurrentLanguage() {
    let path = window.location.pathname;
    return path.includes('-en.html') ? 'en' : 'ar';
}

// تحديث أزرار اللغة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    let currentLang = getCurrentLanguage();
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // تحديث أزرار اللغة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // تحديث الرابط النشط في القائمة
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        let href = link.getAttribute('href');
        
        if (currentLang === 'ar') {
            if (currentPage === href) {
                link.classList.add('active');
            }
        } else {
            let enHref = href.replace('.html', '-en.html');
            if (currentPage === enHref || currentPage === href) {
                link.classList.add('active');
            }
        }
    });
    
    // تعيين اتجاه الصفحة
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
});
