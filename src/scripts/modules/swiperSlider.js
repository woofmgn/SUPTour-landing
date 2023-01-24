import Swiper, { Navigation } from 'swiper';

export const swiper = new Swiper('.mySwiper', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },
});
