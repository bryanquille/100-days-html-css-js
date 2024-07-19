const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const fnIconError = document.querySelector('#fn-icon-error');
const fnTextError = document.querySelector('#fn-error-text');
const lnIconError = document.querySelector('#ln-icon-error');
const lnTextError = document.querySelector('#ln-error-text');
const emailIconError = document.querySelector('#email-icon-error');
const emailTextError = document.querySelector('#email-error-text');
const pwIconError = document.querySelector('#pw-icon-error');
const pwTextError = document.querySelector('#pw-error-text');
const success = document.querySelector('#success');
const closeBtn = document.querySelector('#close-btn');
let aproved = false;

const checkValue = (inputValue, icon, text) => {
    if (inputValue === '') {
        icon.classList.remove('hid-error');
        text.classList.remove('hid-error');
        aproved = false;
        return;
    } else if (inputValue !== '') {
        if ([...icon.classList].includes('hid-error') === false) {
            icon.classList.add('hid-error');
        }
        if ([...text.classList].includes('hid-error') === false) {
            text.classList.add('hid-error');
        }
        aproved = true;
    }
}

const checkEmail = (inputValue, icon, text) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (inputValue === '' || emailRegex.test(inputValue) === false) {
        icon.classList.remove('hid-error');
        text.classList.remove('hid-error');
        aproved = false;
        return;
    } else if (inputValue !== '' && emailRegex.test(inputValue)) {
        if ([...icon.classList].includes('hid-error') === false) {
            icon.classList.add('hid-error');
        }
        if ([...text.classList].includes('hid-error') === false) {
            text.classList.add('hid-error');
        }
        aproved = true;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    checkValue(firstNameValue, fnIconError, fnTextError);
    checkValue(lastNameValue, lnIconError, lnTextError);
    checkEmail(emailValue, emailIconError, emailTextError);
    checkValue(passwordValue, pwIconError, pwTextError);

    if (aproved) {
        success.classList.remove('hid-success');
    }
});

closeBtn.addEventListener('click', () => {
    form.reset();
    success.classList.add('hid-success');
});