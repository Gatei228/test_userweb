// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, 
    spaceBetween: 0,
    breakpoints: {
        1025: {
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



//swiper

function reviews_yandex_map() {
    const selectElement_yandexmap = document.querySelector('.swiper_yandexmap');
    const selectElement_app_store = document.querySelector('.swiper_app_store');
    const selectElement_google_play = document.querySelector('.swiper_google_play');
    const selectElement_thor_tuning = document.querySelector('.swiper_thor_tuning');
    const selectElement_container = document.querySelector('.swiper-container');

    selectElement_app_store.classList.remove("swiper_anim_forward");
    swiper[0].slideTo(0);
    selectElement_app_store.classList.add("swiper_anim_back");
    setTimeout(() => {
        selectElement_app_store.style.display = "none";
        selectElement_yandexmap.style.display = "block";
        selectElement_yandexmap.classList.add("swiper_anim_forward");
    }, 500);
}

function reviews_app_store() {
    const selectElement_yandexmap = document.querySelector('.swiper_yandexmap');
    const selectElement_app_store = document.querySelector('.swiper_app_store');
    const selectElement_google_play = document.querySelector('.swiper_google_play');
    const selectElement_thor_tuning = document.querySelector('.swiper_thor_tuning');
    const selectElement_container = document.querySelector('.swiper-container');

    selectElement_yandexmap.classList.remove("swiper_anim_forward");
    swiper[1].slideTo(0);

    setTimeout(() => {
        selectElement_yandexmap.style.display = "none";
        selectElement_app_store.style.display = "block";
        selectElement_app_store.classList.add("swiper_anim_forward");
    }, 500);
}













