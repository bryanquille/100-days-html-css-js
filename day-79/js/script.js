const hambMenu = document.querySelector('#hamb-menu');
const openMenuIcon = document.querySelector('#open-menu-icon');
const closeMenuIcon = document.querySelector('#close-menu-icon');
const navbar = document.querySelector('#navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mask = document.querySelector('#mask');
const heroImg = document.querySelector('#hero-img');

window.addEventListener('load', () => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1024) {
        heroImg.src = '../assets/images/image-web-3-desktop.jpg';
    }
});

window.addEventListener('resize', () => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1024) {
        heroImg.src = '../assets/images/image-web-3-desktop.jpg';
    }
});

const openCloseMenuBtn = () => {
    openMenuIcon.classList.toggle('show-open-btn');
    openMenuIcon.classList.toggle('hid-open-btn');
    closeMenuIcon.classList.toggle('show-close-btn');
    closeMenuIcon.classList.toggle('hid-close-btn');
}

hambMenu.addEventListener('click', () => {
    openCloseMenuBtn();
    navbar.classList.toggle('hid-menu');
    navbar.classList.toggle('show-menu');
    mask.classList.toggle('hid-mask');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if ([...navbar.classList].includes('hid-menu') === false) {
            navbar.classList.add('hid-menu');
            navbar.classList.remove('show-menu');
            openCloseMenuBtn();
        }
        if ([...mask.classList].includes('hid-mask') === false) {
            mask.classList.add('hid-mask');
        }
    });
});