function setLanguage(lang) {
    const englishContent = document.getElementById('english-content');
    const hindiContent = document.getElementById('hindi-content');
    const headerTitle = document.getElementById('header-title');
    const headerSubtitle = document.getElementById('header-subtitle');

    if (lang === 'en') {
        englishContent.style.display = 'block';
        hindiContent.style.display = 'none';
        headerTitle.textContent = 'Yojna Portal';
        headerSubtitle.textContent = 'This site is under progress, soon this website will look in a better view, stay tuned to Yojana Portal website';
    } else {
        englishContent.style.display = 'none';
        hindiContent.style.display = 'block';
        headerTitle.textContent = 'योजना पोर्टल';
        headerSubtitle.textContent = 'यह साइट प्रगति पर है, जल्द ही यह वेबसाइट बेहतर दृश्य में दिखेगी, योजना पोर्टल वेबसाइट पर बने रहें';
    }

    // Update language buttons active state
    document.querySelectorAll('.language-buttons button').forEach(btn => {
        btn.ariaPressed = btn.innerText === (lang === 'en' ? 'English' : 'हिंदी');
    });

    // Show the home category by default when switching languages
    showCategory('home');
}

function showCategory(category) {
    const currentLang = document.getElementById('english-content').style.display === 'block' ? 'en' : 'hi';
    const categories = document.querySelectorAll('.category-content');

    categories.forEach(cat => {
        cat.style.display = 'none';
    });

    document.getElementById(category + '-' + currentLang).style.display = 'block';

    // Update navbar active state
    document.querySelectorAll('.navbar a').forEach(nav => {
        nav.classList.remove('active');
    });
    document.querySelector(`.navbar a[href="#${category}"]`).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    setLanguage('en'); // Default language is English
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
