(function () {
    const burger = document.querySelector('.header-burger')
    const menu = document.querySelector('.header-nav')
    const close = document.querySelector('.nav-close')
    const Links = document.querySelectorAll('.header-link')

    burger.addEventListener('click', () => {
        menu.classList.add('header-nav-active')
    })
    close.addEventListener('click', () => {
        menu.classList.remove('header-nav-active')
    })
    if (window.innerWidth < 770) {
        Links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('header-nav-active')
            })
        })
    }
})();