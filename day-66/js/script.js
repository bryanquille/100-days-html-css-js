const image = document.querySelector('#image');
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const signForm = document.querySelector('#sign-form');
const modal = document.querySelector('#modal');
const confirmation = document.querySelector('#confirmation');
const closeBtn = document.querySelector('#close-btn');

const hidElement = (element) => {
    element.style = '';
    element.style = `
    opacity: 0;
    visibility: hidden;`;
}

const showElement = (element) => {
    element.style = '';
    element.style = `
    opacity: 1;
    visibility: visible;`;
}

window.addEventListener('load', () => {
    hidElement(modal);

    if (window.innerWidth < 1024) {
        image.src = './assets/images/illustration-sign-up-mobile.svg';
    } else {
        image.src = './assets/images/illustration-sign-up-desktop.svg';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(emailValue)) {
        confirmation.textContent = emailValue;
        showElement(modal);
    }
});

closeBtn.addEventListener('click', () => {
    hidElement(modal);
});
