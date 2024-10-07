function workSlider(newDelay = 2500) {
  const swiper = new Swiper(".work__slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: newDelay,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".work__btn_right",
      prevEl: ".work__btn_left",
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  const sliderElement = document.querySelector(".work__slider");

  sliderElement.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });

  sliderElement.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
}

function usersSlider(newDelay) {
  const swiper = new Swiper(".user__sc", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: false,
    autoplay: {
      delay: newDelay,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".users__info_btn-right",
      prevEl: ".users__info_btn-left",
    },
  });

  const sliderElement = document.querySelector(".user__sc");

  sliderElement.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });

  sliderElement.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
}



workSlider(2500);
usersSlider(1500)