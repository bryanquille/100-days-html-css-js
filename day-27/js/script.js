const navbar = document.querySelector('#navbar');
const hambBtn = document.querySelector('#hamb-btn');
const topBar = document.querySelector('#top-bar');
const middleBar = document.querySelector('#middle-bar');
const bottomBar = document.querySelector('#bottom-bar');
const navlinks = document.querySelectorAll('.navlink');

const hambMenuToggle = () => {
    navbar.classList.toggle('hidden');
    navbar.classList.toggle('visible');
    topBar.classList.toggle('top-bar-x');
    middleBar.classList.toggle('middle-bar-x');
    bottomBar.classList.toggle('bottom-bar-x');
}

hambBtn.addEventListener('click', () => {
    hambMenuToggle();
});

navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        hambMenuToggle();
    });
});