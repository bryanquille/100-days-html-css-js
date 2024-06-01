const statusCheck = document.querySelector('#status');
const score = document.querySelector('#score');
const number1 = document.querySelector('#number-1');
const number2 = document.querySelector('#number-2');
const response = document.querySelector('#response');
const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit-btn');
let scoreCounter = 0;
const scoreLocalStorage = window.localStorage;

const getRandomNumber = () => {
    const number = Math.floor(Math.random() * (10 - 1) + 1);
    return number;
}

const showRandomNumber = () => {
    number1.textContent = getRandomNumber();
    number2.textContent = getRandomNumber();
}

const checkScore = (score) => {
    if (score < 0) return;
}

const nextQuestion = () => {
    score.textContent = scoreCounter;
    response.value = '';
    showRandomNumber();
}

showRandomNumber();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const responseValue = response.value;
    if (responseValue === '') {
        alert('Please enter a number as a response.');
        return;
    }
    const number1Value = Number(number1.textContent);
    const number2Value = Number(number2.textContent);
    const isOk = Number(responseValue) === (number1Value * number2Value); 
    if (isOk) {
        scoreCounter++;
        checkScore(scoreCounter);
        statusCheck.textContent = '✔️';
        scoreLocalStorage.setItem('scoreData', scoreCounter);
        nextQuestion();
    } else {
        scoreCounter--;
        statusCheck.textContent = '❌';
        if (scoreCounter < 0) {
            return;
        } else {
            scoreLocalStorage.setItem('scoreData', scoreCounter);
            nextQuestion();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (scoreLocalStorage.getItem('scoreData') === null) {
        scoreLocalStorage.setItem('scoreData', scoreCounter);
        return;
    };
    scoreCounter = scoreLocalStorage.getItem('scoreData');
    score.textContent = scoreCounter;
});
