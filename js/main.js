const swiper = new Swiper('.hero__swiper', {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,

  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
});