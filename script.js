const hamburger = document.querySelector('.nav__icon');
const open = document.querySelector('.nav__hamburguer');
const close = document.querySelector('.nav__close');
const menu = document.querySelector('.nav__links');
const showMenu = document.querySelector('.showMenu');

function toggle() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    showMenu.style.display = 'none';
    close.style.display = 'none';
    open.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    close.style.display = 'block';
    showMenu.style.display = 'flex';
    open.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggle);
