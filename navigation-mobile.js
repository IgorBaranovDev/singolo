const buttonHamburher = document.getElementById('menu-for-mobile');
const menu = document.getElementById('header__navigation');
const links = document.getElementById('navigation-links');
const logo = document.getElementById('header__logo');
let hamburgerSwitcher = 1;

buttonHamburher.addEventListener('click', () => {
  if (hamburgerSwitcher === 1) {
    buttonHamburher.classList.add('header__menu-for-mobile-active');
    menu.style.display = 'block';
    logo.classList.add('header__logo_mobile_active');
    hamburgerSwitcher = 2;
  } else {
    menu.style.display = 'none';
    buttonHamburher.classList.remove('header__menu-for-mobile-active');
    logo.classList.remove('header__logo_mobile_active');
    hamburgerSwitcher = 1;
  }
});

links.addEventListener('click', () => {
  if (window.screen.width < 767) {
    menu.style.display = 'none';
    buttonHamburher.classList.remove('header__menu-for-mobile-active');
    logo.classList.remove('header__logo_mobile_active');
    hamburgerSwitcher = 1;
  }
});

window.addEventListener('resize', () => {
  window.screen.width > 767
    ? (menu.style.display = 'block')
    : (menu.style.display = 'none');
});
