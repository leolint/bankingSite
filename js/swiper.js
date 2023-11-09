const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

if (window.innerWidth < 1100) {
  swiper.params.slidesPerView = 2;
}
if (window.innerWidth < 500){
  swiper.params.slidesPerView = 1;
}




