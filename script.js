const swiper = new Swiper('.work__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.work__btn_right',
    prevEl: '.work__btn_left',
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});


const sliderElement = document.querySelector('.work__slider');

sliderElement.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});

sliderElement.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});