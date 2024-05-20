const hambMenu = document.querySelector("#hamb-menu");
const navbar = document.querySelector("#navbar");
const closeBtn = document.querySelector("#close-btn");
const navItems = document.querySelectorAll(".navitem");

const toggleNavbar = () => {
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("visible");
}

hambMenu.addEventListener("click", () => {
    toggleNavbar();
});

closeBtn.addEventListener("click", () => {
    toggleNavbar();
});

navItems.forEach(navitem => {
    navitem.addEventListener("click", () => {
        toggleNavbar();
    });
});