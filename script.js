const navigationLinks = document.getElementById('navigation-links');

navigationLinks.addEventListener('click', event => {
  navigationLinks
    .querySelectorAll('a')
    .forEach(element => element.classList.remove('header_link_active'));
  event.target.classList.add('header_link_active');
});
