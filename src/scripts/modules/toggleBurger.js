const burgerOverlay = document.querySelector('.navigation__burger-menu');
const burgerMenu = document.querySelector(
  '.navigation__item-list_type_burger-wrapper'
);
const menuIcon = document.querySelector('.header__burger-button');

export const toggleBurger = () => {
  burgerOverlay.classList.toggle('navigation__burger-menu_active');
  burgerMenu.classList.toggle(
    'navigation__item-list_type_burger-wrapper_active'
  );
  menuIcon.classList.toggle('active');
};
