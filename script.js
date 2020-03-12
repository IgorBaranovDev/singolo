const navigationLinks = document.getElementById('navigation-links');
const leftArrowOfslider = document.getElementById('left-arrow');
const rightArrowOfslider = document.getElementById('right-arrow');
const iphoneHorizont = document.getElementById('iphone-horizont');
const iphoneHorizontButton = document.getElementById(
  'button-gorizontal-iphone'
);
const iphoneVertical = document.getElementById('iphone-vertical');
const iphoneVerticalButton = document.getElementById('button-vertical-iphone');
const projects = document.getElementById('projects');

navigationLinks.addEventListener('click', event => {
  navigationLinks
    .querySelectorAll('a')
    .forEach(element => element.classList.remove('header_link_active'));
  event.target.classList.add('header_link_active');
});

iphoneHorizont.addEventListener('click', event => {
  if (event.target.className === 'iphone_gorizontal_bg-img') {
    event.target.style = 'z-index: 2';
  }
});

iphoneVertical.addEventListener('click', event => {
  if (event.target.className === 'iphone_vertical_bg-img') {
    event.target.style = 'z-index: 2';
  }
});

iphoneHorizontButton.addEventListener('click', () => {
  iphoneHorizont.children[2].style = 'z-index: 3';
});

iphoneVerticalButton.addEventListener('click', () => {
  iphoneVertical.children[2].style = 'z-index: 3';
});

projects.addEventListener('click', () => {
  projects
    .querySelectorAll('div')
    .forEach(element => element.classList.remove('item-active'));
  event.path[1].classList.add('item-active');
});
