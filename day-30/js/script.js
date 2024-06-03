const monthText = document.querySelector('#month-text');
const fullDate = document.querySelector('#full-date');
const daysNumbers = document.querySelector('#days-numbers');

const date = new Date();
const currDay = date.getDate();
const weekday = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();

const weekdaysFullNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weeksdaysShortNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemper', 'October', 'November', 'December'];

monthText.textContent = `${monthsNames[month]}`;

fullDate.textContent = `${weekdaysFullNames[weekday]}, ${monthsNames[month]} ${currDay}, ${year}`;

const daysOfCurrentMonth = new Date(year, (month + 1), 0).getDate();
daysNumbers.innerHTML = '';
for (let day = 1; day <= daysOfCurrentMonth; day++) {
    const indexDay = new Date(year, month, day).getDay();

    if (day === 1) {
        for (let i = 0; i < indexDay; i++) {
            daysNumbers.innerHTML += `<span></span>`;
        }
    }
    daysNumbers.innerHTML += `<span id='${day}'>${day}</span>`;
}

const todayNumber = document.getElementById(`${currDay}`);
todayNumber.classList.add('highlighted');
