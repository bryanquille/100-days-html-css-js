const navbar = document.querySelector(".navbar");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navItems = document.querySelectorAll(".nav-link");

openMenu.addEventListener("click", () => {
    navbar.classList.add("visible");
})

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("visible");
})

const navItemArray = Array.from(navItems);
navItemArray.forEach((item) => {
    item.addEventListener("click", () => {
        navbar.classList.remove("visible");
    });
});