const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const clock = () => {
    const date = new Date();
    const currentHour = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();

    hours.textContent = currentHour;
    minutes.textContent = currentMinutes;
    seconds.textContent = currentSeconds;
}

clock();

setInterval(() => {
    clock();
}, 500);
