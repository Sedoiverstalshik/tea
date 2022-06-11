const swiper = new Swiper('.hero__swiper', {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,

  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
});


const burgerBtn = document.querySelector('.burger__menu')
const menu = document.querySelector('.header__menu')

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('active'),
    burgerBtn.classList.toggle('active')
})