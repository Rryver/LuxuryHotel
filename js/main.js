document.onloadend = calculatePadding();

function calculatePadding() {
    let socialLinks_icons = document.getElementsByClassName('social-links__icon');

    for (const socialLinks_icon of socialLinks_icons) {
        socialLinks_icon.style.paddingRight = (15 - socialLinks_icon.width) + "px";
    }
}

let menu = document.querySelector('.nav-menu');
function checkWidth(currentWidth) {
    if (currentWidth.matches) {
        menu.classList.add('nav-menu__hidden');
    } else {
        menu.classList.remove('nav-menu__hidden');
    }
}
let currentWidth = window.matchMedia("(max-width: 740px)");
checkWidth(currentWidth);
currentWidth.addListener(checkWidth);


function menuOpenClose() {
    console.log(menu.classList);
    if (!menu.classList.contains('nav-menu__hidden')) {
        menu.classList.add('nav-menu__hidden');
    } else {
        menu.classList.remove('nav-menu__hidden');
    }
}