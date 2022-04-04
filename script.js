let hamburger = document.querySelector('.nav__icon')
let open = document.querySelector('.nav__hamburguer')
let close = document.querySelector('.nav__close')
let menu = document.querySelector('.nav__links')
let navElement = document.querySelectorAll('.nav__link')
let showMenu = document.querySelector(".showMenu");

function toggle() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu')
    showMenu.style.display = 'none'
    close.style.display = 'none'
    open.style.display = 'block'
  } else {
    menu.classList.add('showMenu')
    close.style.display = 'block'
    showMenu.style.display = 'flex'
    open.style.display = 'none'
  }
}

hamburger.addEventListener('click', toggle)
