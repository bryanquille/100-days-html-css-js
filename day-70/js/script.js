const timeBtn = document.querySelector('#time-btn');
const circle = document.querySelector('#circle');
const basicPrice = document.querySelector('#basic-price');
const proPrice = document.querySelector('#pro-price');
const masterPrice = document.querySelector('#master-price');
let time = 'anually';

timeBtn.addEventListener('click', () => {
    circle.classList.toggle('left-circle');
    circle.classList.toggle('right-circle');

    if (time === 'anually') {
        time = 'monthly';
        basicPrice.textContent = '19.99';
        proPrice.textContent = '24.99';
        masterPrice.textContent = '39.99';
        return;
    }

    if (time === 'monthly') {
        time = 'anually';
        basicPrice.textContent = '199.99';
        proPrice.textContent = '249.99';
        masterPrice.textContent = '399.99';
        return;
    }
});