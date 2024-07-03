const targetYearEl = document.querySelector('#target-year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentDate = new Date();
const targetYear = currentDate.getFullYear();
targetYearEl.textContent = targetYear + 1;

const newYearTime = new Date(`Jan 1, ${targetYear + 1} 00:00:00`).getTime();

const countdown = () => {
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
}

countdown();

setInterval(() => {
    countdown();
}, 1000);
