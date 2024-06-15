const menuBtn = document.querySelector('#menu-btn');
const topBar = document.querySelector('#top-bar');
const middleBar = document.querySelector('#middle-bar');
const bottomBar = document.querySelector('#bottom-bar');
const navbar = document.querySelector('#navbar');
const featuresBtn = document.querySelector('#features-btn');
const featuresSubmenu = document.querySelector('#features-submenu');
const companyBtn = document.querySelector('#company-btn');
const companySubmenu = document.querySelector('#company-submenu');
const closeMenuEls = document.querySelectorAll('.close-menu');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('hidden-menu');
    navbar.classList.toggle('visible-menu');
    topBar.classList.toggle('top-bar');
    middleBar.classList.toggle('middle-bar');
    bottomBar.classList.toggle('bottom-bar');
});

featuresBtn.addEventListener('click', (e) => {
    const dropIcon = e.currentTarget.lastElementChild;
    if (dropIcon.style.cssText === 'transform: rotate(180deg);') {
        dropIcon.style = ''
    } else {
        dropIcon.style = 'transform: rotate(180deg);'
    }
    featuresSubmenu.classList.toggle('hidden-submenu');
    featuresSubmenu.classList.toggle('show-submenu');
});

companyBtn.addEventListener('click', (e) => {
    const dropIcon = e.currentTarget.lastElementChild;
    if (dropIcon.style.cssText === 'transform: rotate(180deg);') {
        dropIcon.style = ''
    } else {
        dropIcon.style = 'transform: rotate(180deg);'
    }
    companySubmenu.classList.toggle('hidden-submenu');
    companySubmenu.classList.toggle('show-submenu');
});

closeMenuEls.forEach(el => {
    el.addEventListener('click', () => {
        navbar.classList.add('hidden-menu');
        navbar.classList.remove('visible-menu');
        topBar.classList.remove('top-bar');
        middleBar.classList.remove('middle-bar');
        bottomBar.classList.remove('bottom-bar');
    });
});