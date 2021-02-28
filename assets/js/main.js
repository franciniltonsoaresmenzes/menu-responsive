const NavMenu = document.getElementById('nav-menu'),
      toggle = document.getElementById('nav-toggle'),
      close = document.getElementById('menu-close')

toggle.addEventListener('click', () => {
    NavMenu.classList.toggle('show')
})
close.addEventListener('click', () => {
    NavMenu.classList.remove('show')
})