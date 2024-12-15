// Click item menu
const menuLinks = document.querySelectorAll('.header__menu a');
const mobileIcon = document.querySelector('.header__icon--mobi i');
const menu = document.querySelector('.header__menu');

menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menuLinks.forEach(item => item.classList.remove('header__menu--active'));
        
        this.classList.add('header__menu--active');
    });
});

// Click icon mobi
mobileIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        mobileIcon.classList.remove('fa-bars-staggered'); 
        mobileIcon.classList.add('fa-xmark'); 
    } else {
        mobileIcon.classList.remove('fa-xmark'); 
        mobileIcon.classList.add('fa-bars-staggered');
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        mobileIcon.classList.remove('fa-xmark');
        mobileIcon.classList.add('fa-bars-staggered');
    });
});

