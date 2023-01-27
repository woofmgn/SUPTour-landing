import '../styles/styles.scss';
import { initMask } from './modules/inputMask';
import { swiper } from './modules/swiperSlider';
import { toggleBurger } from './modules/toggleBurger';

const burgerButton = document.querySelector('.header__burger-button');

swiper.slideNext();
initMask();

burgerButton.addEventListener('click', toggleBurger);
