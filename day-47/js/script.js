const numberText = document.querySelector('#number');
const lessBtn = document.querySelector('#less-btn');
const resetBtn = document.querySelector('#reset-btn');
const plusBtn = document.querySelector('#plus-btn');
let number = 0;

const numberColor = () => {
    if (number === 0) {
        numberText.style = 'color: #102C57;'
    } else if (number < 0) {
        numberText.style = 'color: #fe6e6e;'
    } else if (number > 0) {
        numberText.style = 'color: #06D001;'
    }
}

const increaseNumber = () => {
    number++;
    numberText.textContent = number;
    numberColor();
}

const decreaseNumber = () => {
    number--;
    numberText.textContent = number;
    numberColor();
}

const reset = () => {
    number = 0;
    numberText.textContent = number;
    numberColor();
}

lessBtn.addEventListener('click', () => {
    decreaseNumber();
});

plusBtn.addEventListener('click', () => {
    increaseNumber();
});

resetBtn.addEventListener('click', () => {
    reset();
});