const hoursHand = document.querySelector('#hours-hand');
const minutesHand = document.querySelector('#minutes-hand');
const secondsHand = document.querySelector('#seconds-hand');

const hourHandAngle = () => {
    const date = new Date();
    const hour = date.getHours();
    let hoursDeg = 0;
    if (hour < 15) {
        hoursDeg = (hour * 30) - 90;
    } else if (hour >= 15) {
        hoursDeg = (hour * 30) - 90;
    }
    hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
}

const minutesHandAngle = () => {
    const date = new Date();
    const minutes = date.getMinutes();
    const minutesDeg = (minutes * 6) - 90;
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
}

const secondsHandAngle = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const secondsDeg = (seconds * 6) - 90;
    secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
}

hourHandAngle();
minutesHandAngle();
secondsHandAngle();

setInterval(() => {
    hourHandAngle();
}, 30000);

setInterval(() => {
    minutesHandAngle();
}, 1000);

setInterval(() => {
    secondsHandAngle();
}, 10);
