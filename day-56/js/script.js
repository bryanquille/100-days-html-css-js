const hero = document.querySelector('#hero');

window.addEventListener('scroll', () => {
    hero.style.backgroundSize = 160 - window.scrollY / 12 + "%";
    hero.style.opacity = 1 - window.scrollY / 900;
});