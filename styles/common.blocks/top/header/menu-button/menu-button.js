function menuOpenClose() {
    let menu = document.querySelector('.nav-menu');
    if (!menu.classList.contains('nav-menu__hidden')) {
        menu.classList.add('nav-menu__hidden');
    } else {
        menu.classList.remove('nav-menu__hidden');
    }
}