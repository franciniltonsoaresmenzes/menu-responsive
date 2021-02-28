const NavMenu = document.getElementById('nav-menu'),
      toggle = document.getElementById('nav-toggle'),
      close = document.getElementById('menu-close')

toggle.addEventListener('click', () => {
    NavMenu.classList.toggle('show')
})
close.addEventListener('click', () => {
    NavMenu.classList.remove('show')
})


function scrolltop() {
    const menu = document.getElementById('menu-top')

    if(scrollY >= 200) {
        menu.classList.add('show-scroll')
    }else {
        menu.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrolltop)


function buttonScrool() {
    const button = document.getElementById('top')

    if(scrollY >= 500) {
        button.classList.add('button-show')
    }else {
        button.classList.remove('button-show')
    }
}

window.addEventListener('scroll', buttonScrool)