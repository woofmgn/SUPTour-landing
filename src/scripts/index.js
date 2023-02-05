import '../styles/styles.scss';
import { initMask } from './modules/inputMask';
import { swiper } from './modules/swiperSlider';
import { toggleBurger } from './modules/toggleBurger';

const burgerButton = document.querySelector('.header__burger-button');
const burgerLink = document.querySelectorAll('.navigation__link_type_burger');

swiper.slideNext();
initMask();

burgerButton.addEventListener('click', toggleBurger);

burgerLink.forEach((link) => {
  link.addEventListener('click', toggleBurger);
});
