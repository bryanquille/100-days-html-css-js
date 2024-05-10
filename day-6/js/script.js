const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");
let secondsInitialValue = 60;
let minutesInitialValue = 25;
let intervalTimer;

const showInitialTime = () => {
    minutes.textContent = "25";
    seconds.textContent = "00";
}

const stopAndResetTimer = () => {
    clearInterval(intervalTimer);
    secondsInitialValue = 60;
    minutesInitialValue = 25;
    showInitialTime();
    startBtn.disabled = false;
    return;
}

const pomodoroTimer = () => {
    intervalTimer = setInterval(() => {
        if (minutesInitialValue === 25) {
            minutes.textContent = "24";
            minutesInitialValue--;
        } else if (minutesInitialValue === -1) {
            stopAndResetTimer();
            return;
        } else {
            minutes.textContent = String(minutesInitialValue).length === 2 ? minutesInitialValue : `0${minutesInitialValue}`;
        }

        seconds.textContent = String(secondsInitialValue - 1).length === 2 ? String(secondsInitialValue - 1) : `0${String(secondsInitialValue - 1)}`;
        secondsInitialValue--;
        
        if (secondsInitialValue === 0) {
            secondsInitialValue = 60;
            minutesInitialValue--;
        }
    }, 1000);
}

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    pomodoroTimer();
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalTimer);
    startBtn.disabled = false;
    return;
});

resetBtn.addEventListener("click", () => {
    stopAndResetTimer();
    return;
});