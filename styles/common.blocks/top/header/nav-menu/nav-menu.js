
function checkWidth(currentWidth) {
    let menu = document.querySelector('.nav-menu');
    if (currentWidth.matches) {
        menu.classList.add('nav-menu__hidden');
    } else {
        menu.classList.remove('nav-menu__hidden');
    }
}
let currentWidth = window.matchMedia("(max-width: 740px)");
checkWidth(currentWidth);
currentWidth.addListener(checkWidth);