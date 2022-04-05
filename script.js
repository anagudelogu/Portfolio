const hamburger = document.querySelector('.nav__icon');
const navMenu = document.querySelector('.nav__links');
const { body } = document;
const links = document.querySelectorAll('.nav__link');

function toggle() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('noScroll');
}

function linkClicked() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('noScroll');
}

hamburger.addEventListener('click', toggle);
links.forEach((n) => n.addEventListener('click', linkClicked));
