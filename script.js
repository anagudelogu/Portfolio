const hamburger = document.querySelector('.nav__icon');
// const open = document.querySelector('.nav__hamburguer');
// const close = document.querySelector('.nav__close');
const navMenu = document.querySelector('.nav__links');
const active = document.querySelector('.active');
const body = document.body;
const links = document.querySelectorAll('.nav__link');

function toggle() {
//   if (menu.classList.contains('showMenu')) {
//     menu.classList.remove('showMenu');
//     // menu.style.display = 'none';
//     close.style.display = 'none';
//     open.style.display = 'block';
//   } else {
//     menu.classList.add('showMenu');
//     close.style.display = 'block';
//     // menu.style.display = 'flex';
//     open.style.display = 'none';
//   }

    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('noScroll');
}

function linkClicked(){
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('noScroll');
}

hamburger.addEventListener('click', toggle);
links.forEach(n => n.addEventListener('click', linkClicked));
