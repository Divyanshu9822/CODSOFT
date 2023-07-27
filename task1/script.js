function closeMenu(event) {
    const menu = document.getElementById("menu");

    menu.classList.remove('block');

}

function toggle() {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    menu.classList.toggle('block');
}
