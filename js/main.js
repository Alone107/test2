const swiperSlider = document.querySelector(".swiper-slider");

if (swiperSlider) {
  const swiperSlider = new Swiper(".swiper-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-slider-next",
      prevEl: ".swiper-slider-prev",
    },
  });
}
