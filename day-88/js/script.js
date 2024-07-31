const form = document.querySelector('#form');
const textToGenerateInput = document.querySelector('#text-to-generate');
const codeContainer = document.querySelector('#code-container');
const codeImage = document.querySelector('#code-img');
const text = document.querySelector('#text');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const textToGenerateValue = textToGenerateInput.value;
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textToGenerateValue}`;
    codeImage.src = apiUrl;
    text.textContent = textToGenerateValue;
    codeContainer.classList.remove('hid');
    codeContainer.classList.add('show');
});