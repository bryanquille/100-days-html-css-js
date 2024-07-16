const heroImage = document.querySelector('#hero-image');
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const errorIcon = document.querySelector('#error-icon');
const errorText = document.querySelector('#error-text');
const successText = document.querySelector('#success-text');

window.addEventListener('load', () => {
    if (window.innerWidth >= 1024) {
        heroImage.src = 'assets/images/hero-desktop.jpg';
    }
});

const showSuccess = () => {
    successText.classList.remove('hid-success');
    setTimeout(() => {
        successText.classList.add('hid-success');
    }, 3000);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(emailValue) === false) {
        errorIcon.classList.remove('hid-error');
        errorText.classList.remove('hid-error');
    } else {
        if ([...errorIcon.classList].includes('hid-error')) {
            showSuccess();
            form.reset();
            return;
        } else {
            errorIcon.classList.add('hid-error');
            errorText.classList.add('hid-error');
            showSuccess();
            form.reset();
        }
    }
});
