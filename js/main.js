document.onloadend = calculatePadding();

function calculatePadding() {
    let socialLinks_icons = document.getElementsByClassName('social-links__icon');

    for (const socialLinks_icon of socialLinks_icons) {
        socialLinks_icon.style.paddingRight = (15 - socialLinks_icon.width) + "px";
    }
}


function menuOpenClose() {
    let menu = document.getElementsByClassName("nav-menu")[0];
    if (menu.style.display !== "none") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}