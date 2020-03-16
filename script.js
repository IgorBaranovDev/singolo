const navigationLinks = document.getElementById('navigation-links');
const leftArrowOfslider = document.getElementById('left-arrow');
const rightArrowOfslider = document.getElementById('right-arrow');
const iphoneHorizont = document.getElementById('iphone-horizont');
const iphoneHorizontButton = document.getElementById(
  'button-gorizontal-iphone'
);
const iphoneVertical = document.getElementById('iphone-vertical');
const iphoneVerticalButton = document.getElementById('button-vertical-iphone');
const iphoneVerticalCenter = document.getElementById('iphone-vertical-center');
const iphoneVerticalCenterButton = document.getElementById(
  'button-vertical-iphone-center'
);
const projects = document.getElementById('projects');
const menuSelectWorks = document.getElementById('selectWork');
const inputNameUser = document.getElementById('form_name_user');
const iputEmailUser = document.getElementById('form_email_user');
const inputSubjectUser = document.getElementById('form_subject');
const inputDescribeUser = document.getElementById('form_describe');
const formSubmit = document.getElementById('form__submit');
const modalWindow = document.getElementById('pop_up');
const popUpTopic = document.getElementById('pop_up__topic');
const popUpDescribe = document.getElementById('pop_up__describe');
const popUpButtonClose = document.getElementById('pop_up_close');

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

iphoneVerticalCenter.addEventListener('click', event => {
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

iphoneVerticalCenterButton.addEventListener('click', () => {
  iphoneVerticalCenter.children[2].style = 'z-index: 3';
});

projects.addEventListener('click', () => {
  if (event.target.tagName === 'IMG') {
    projects
      .querySelectorAll('div')
      .forEach(element => element.classList.remove('item-active'));
    event.path[1].classList.add('item-active');
  }
});

menuSelectWorks.addEventListener('click', () => {
  if (event.target.className === 'selectWork_item') {
    menuSelectWorks
      .querySelectorAll('button')
      .forEach(element => element.classList.remove('selectWork_item_active'));
    event.target.classList.add('selectWork_item_active');
    projects
      .querySelectorAll('div')
      .forEach(
        element =>
          (element.style = `order: ${Math.floor(
            1 + Math.random() * (12 + 1 - 1)
          )}`)
      );
  }
});

formSubmit.addEventListener('click', () => {
  if (inputNameUser.value === '' || iputEmailUser.value === '') {
    return false;
  } else {
    if (inputSubjectUser.value === '') {
      popUpTopic.innerText = 'not topics';
    } else {
      popUpTopic.innerText = inputSubjectUser.value.toString();
    }
    if (inputDescribeUser.value === '') {
      popUpDescribe.innerText = 'no description';
    } else {
      popUpDescribe.innerText = inputDescribeUser.value.toString();
    }
    modalWindow.style = 'display: block;';
  }
});

popUpButtonClose.addEventListener('click', () => {
  modalWindow.style = 'display: none;';
});

const slides = document.getElementsByClassName('slider__item');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let slideIndex = 1;
// showSlides(slideIndex);

rightArrow.addEventListener('click', () => {
  showSlides((slideIndex += 1), 'right');
});

leftArrow.addEventListener('click', () => {
  showSlides((slideIndex -= 1), 'left');
});

function showSlides(n, direction) {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('slider__anim_left');
    slides[i].classList.remove('slider__anim_right');
    slides[i].style.display = 'none';
  }
  if (direction === 'left') {
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('slider__anim_left');
  } else if (direction === 'right') {
    slides[slideIndex - 1].classList.add('slider__anim_right');
    slides[slideIndex - 1].style.display = 'block';
  }
}
