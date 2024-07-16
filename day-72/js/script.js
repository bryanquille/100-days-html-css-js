const body = document.querySelector('body');
const bgImage = document.querySelector('#bg-image');
const cvcCodeText = document.querySelector('#cvc-code-text');
const cardNumbertext = document.querySelector('#card-number-text');
const cardName = document.querySelector('#name-card');
const monthText = document.querySelector('#month-text');
const yearText = document.querySelector('#year-text');
const form = document.querySelector('#form');
const holderName = document.querySelector('#holder-name');
const number = document.querySelector('#number');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const cvcCode = document.querySelector('#cvc-code');
const confirmBtn = document.querySelector('#confirm-btn');
const modal = document.querySelector('#modal');
const continueBtn = document.querySelector('#continue-btn');

window.addEventListener('load', () => {
    if (window.innerWidth >= 1024) {
        bgImage.src = 'assets/images/bg-main-desktop.png';
    }
});

const validateCreditCard = (cardNumber) => {
    const regex = /^\d{16}$/;
    return regex.test(cardNumber);
}

const separateCardNumber = (cardNumber) => {
    const arrayNumber = cardNumber.split('');
    arrayNumber.splice(4, 0, " ");
    arrayNumber.splice(9, 0, " ");
    arrayNumber.splice(14, 0, " ");
    const separatedNumber = arrayNumber.join("");
    return separatedNumber;
}

const showHidModal = () => {
    body.style = 'background-color: #f5f5f5;'
    modal.classList.toggle('hidden-modal');
    modal.classList.toggle('show-modal');
}

const resetAll = () => {
    cvcCodeText.textContent = '000';
    cardName.textContent = 'John Doe';
    cardNumbertext.textContent = separateCardNumber('0000000000000000');
    monthText.textContent = '00';
    yearText.textContent = '00';
    form.reset();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const holderNameValue = holderName.value;
    const numberValue = number.value;
    const monthValue = month.value;
    const yearValue = year.value;
    const cvcCodeValue = cvcCode.value;

    if (validateCreditCard(numberValue) === false) {
        alert('Please insert a correct card number.');
        return;
    }

    cvcCodeText.textContent = cvcCodeValue;
    cardName.textContent = holderNameValue;
    cardNumbertext.textContent = separateCardNumber(numberValue);
    monthText.textContent = monthValue;
    yearText.textContent = yearValue;

    setTimeout(() => {
        showHidModal();
    }, 600);
});

continueBtn.addEventListener('click', () => {
    showHidModal();
    resetAll();
});