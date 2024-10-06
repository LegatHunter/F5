const swiper = new Swiper('.work__slider', {
  slidesPerView: 3, // По умолчанию показывать 3 карточки
  spaceBetween: 30, // Расстояние между карточками
  loop: true,
  autoplay: {
    delay: 2500, // 2.5 секунды
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.work__btn_right',
    prevEl: '.work__btn_left',
  },
  // Настройка для разных экранов
  breakpoints: {
    375: {
      slidesPerView: 1, // Одна карточка на экранах от 375px до 500px
      spaceBetween: 10, // Меньшее расстояние между карточками на мобильных
    },
    500: {
      slidesPerView: 2, // 2 карточки для экранов шириной от 500px
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3, // Для больших экранов по умолчанию 3 карточки
      spaceBetween: 30,
    }
  }
});

// Остановка автоплей на ховере
const sliderElement = document.querySelector('.work__slider');

sliderElement.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});

sliderElement.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});