const langData = {
    ar: {
        "nav-home": "الرئيسية",
        "hero-title": "أودونكس | حلول ERP الموحدة",
        "feat-1-t": "تكامل",
        "pricing-title": "الأسعار",
        "btn-send": "تقديم"
        // ... تكملة باقي النصوص من التصميم
    },
    en: {
        "nav-home": "Home",
        "hero-title": "OdoNex | Unified ERP Solutions",
        "feat-1-t": "Integration",
        "pricing-title": "Pricing",
        "btn-send": "Submit"
        // ... تكملة باقي النصوص من التصميم
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const html = document.getElementById('odonex-site');
    
    // تغيير الاتجاه واللغة
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    html.lang = currentLang;
    
    // تحديث النصوص
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerText = langData[currentLang][key];
    });

    // تغيير نص الزر
    document.querySelector('.lang-btn').innerText = currentLang === 'ar' ? 'English' : 'العربية';
}
