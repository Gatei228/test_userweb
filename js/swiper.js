// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, 
    spaceBetween: 0,
    breakpoints: {
        376: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: false,
    autoplay: false,

    preventClicksPropagation: true,
    preventClicks: true,
    watchOverflow: true,

});

//burger
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}


// custom_select_arrow

const selectElement = document.getElementById('customSelect');

// открытие select
selectElement.addEventListener('focus', function() {
  this.classList.add('opened');
});

// закрытие select
selectElement.addEventListener('blur', function() {
  this.classList.remove('opened');
});







