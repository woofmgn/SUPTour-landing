const burgerOverlay = document.querySelector('.header__burger-menu');
const burgerMenu = document.querySelector('.header__burger-wrapper');
const menuIcon = document.querySelector('.header__burger-button');

export const toggleBurger = () => {
  burgerOverlay.classList.toggle('header__burger-menu_active');
  burgerMenu.classList.toggle('header__burger-wrapper_active');
  menuIcon.classList.toggle('active');
};
