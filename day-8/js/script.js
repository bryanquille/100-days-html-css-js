const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const miliseconds = document.querySelector('#miliseconds');
const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const resetBtn = document.querySelector('#reset-btn');

let intervalTimer = null;
let milisecondsCounter = 0;
let secondsCounter = 0;
let minutesCounter = 0;
let hoursCounter = 0;

const showtime = (timeElement, number) => {
    timeElement.textContent = String(number).length === 2 
        ? number
        : `0${number}`; 
}

const disabledButton = (button) => {
    button.disabled = true;
    button.style = 'background-color: #31363FAA; cursor: not-allowed';
}

const ableButton = (button) => {
    button.disabled = false;
    button.removeAttribute('style');
}

const updateValuesToZero = () => {
    milisecondsCounter = 0;
    secondsCounter = 0;
    minutesCounter = 0;
    hoursCounter = 0;
    showtime(hours, 0);
    showtime(minutes, 0);
    showtime(seconds, 0);
    showtime(miliseconds, 0);
}

const stopwatch = () => {
    intervalTimer = setInterval(() => {
        milisecondsCounter++;
        showtime(miliseconds, milisecondsCounter);
        if (milisecondsCounter === 99) {
            milisecondsCounter = 0;
            secondsCounter++;
            showtime(seconds, secondsCounter);
            if (secondsCounter === 59) {
                secondsCounter = 0;
                minutesCounter++;
                showtime(minutes, minutesCounter);
                if (minutesCounter === 59) {
                    minutesCounter = 0;
                    hoursCounter++;
                    if (hoursCounter === 24) {
                        clearInterval(intervalTimer);
                        updateValuesToZero();
                        showtime(hours, 24);
                        alert('Please reset the Stopwatch!')
                        return;
                    } else {
                        showtime(hours, hoursCounter);
                    }
                }
            }
        }
    }, 10);    
}

disabledButton(stopBtn);

startBtn.addEventListener('click', () => {
    disabledButton(startBtn);
    ableButton(stopBtn);
    stopwatch();
});

stopBtn.addEventListener('click', () => {
    disabledButton(stopBtn);
    ableButton(startBtn);
    clearInterval(intervalTimer);
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalTimer);
    updateValuesToZero();
    ableButton(startBtn);
    disabledButton(stopBtn); 
});