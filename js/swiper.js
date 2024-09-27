//burger
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}

// swiper

const swipers = Array.from(document.querySelectorAll('.swiper-container')).map(container => {
    // Находим кнопки навигации для текущего слайдера
    const nextButton = container.querySelector('.swiper-button-next');
    const prevButton = container.querySelector('.swiper-button-prev');


    return new Swiper(container, {
        slidesPerView: 1.1,
        spaceBetween: parseFloat(getComputedStyle(document.documentElement).fontSize) * 2.4,
        breakpoints: {
            1025: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        },
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        loop: false,
        autoplay: false,
        preventClicksPropagation: true,
        preventClicks: true,
        watchOverflow: true,
    
        

        on: {
            slideChange: function() {
                // Проверка активного слайда
                if (this.activeIndex === 0) {
                    // Если первый слайд, скрываем кнопку "prev" для текущего слайдера
                    prevButton.style.display = 'none';
                } else {
                    // Если не первый слайд, показываем кнопку "prev" для текущего слайдера
                    prevButton.style.display = 'block';
                }

                // Проверка последнего слайда
                if (this.activeIndex === this.slides.length - this.params.slidesPerView) {
                    // Если последний слайд, скрываем кнопку "next" для текущего слайдера
                    nextButton.style.display = 'none';
                } else {
                    // Если не последний слайд, показываем кнопку "next" для текущего слайдера
                    nextButton.style.display = 'block';
                }
            }
        }
    });
});




document.addEventListener('DOMContentLoaded', () => {
    // При загрузке страницы показываем первый слайд
    switchSlider(0, true);

    const selectElement = document.getElementById('slider-select');

    // Добавляем обработчик для события 'change'
    selectElement.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        let activeIndex = 0;

        // Устанавливаем индекс слайда в зависимости от выбранного значения
        switch (selectedValue) {
            case 'Yandexmap':
                activeIndex = 0;
                break;
            case 'app_store':
                activeIndex = 1;
                break;
            case 'google_play':
                activeIndex = 2;
                break;
            case 'thor-tuning.com':
                activeIndex = 3;
                break;
            default:
                activeIndex = 0;
        }

        // Переключаем слайдер на соответствующий индекс
        switchSlider(activeIndex);
    });
});

function switchSlider(activeIndex, firstLoad = false) {
    const allSliders = document.querySelectorAll('.swiper-container');
    allSliders.forEach((slider, index) => {
        if (index === activeIndex) {
            slider.classList.remove("swiper_anim_back");

            if (firstLoad) {
                slider.style.display = "block"; 
                document.querySelector('.box-swiper').style.display = "none"
                swipers[index].slideTo(0);
                slider.classList.add("swiper_anim_forward");
            } else {
                setTimeout(() => {
                    slider.style.display = "block";
                    swipers[index].slideTo(0);
                    slider.classList.add("swiper_anim_forward");
                }, 500);
            }
        } else {
            slider.classList.remove("swiper_anim_forward");
            slider.classList.add("swiper_anim_back");

            setTimeout(() => {
                slider.style.display = "none";
            }, 500);
        }

        
    const divElements = document.querySelectorAll('.map > div');

        // Проходим по каждому div и находим <p> внутри
        divElements.forEach((div, index) => {
            const pElement = div.querySelector('p'); // Находим элемент <p> внутри текущего div

            // Меняем цвет только у того элемента, который соответствует активному индексу
            if (index === activeIndex) {
                pElement.style.color = "#ff4001"; // Изменяем цвет текста на оранжевый
                pElement.style.opacity = "1"; // Изменяем цвет текста на оранжевый
                div.style.borderBottom = "2px solid #ff4001"; // Изменяем цвет текста на оранжевый

            } else {
                pElement.style.color = "#ffffff"; // Возвращаем цвет остальных элементов к белому
                pElement.style.opacity = ""; // Изменяем цвет текста на оранжевый
                div.style.borderBottom = "2px solid rgba(255, 255, 255, 0.3)"; 
            }
        });

    });
}













