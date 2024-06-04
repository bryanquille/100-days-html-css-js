const monthText = document.querySelector('#month-text');
const weekdatText = document.querySelector('#weekday-text');
const dayNumberText = document.querySelector('#day-number-text');
const yearText = document.querySelector('#year-text');

const date = new Date();
const currDay = date.getDate();
const weekday = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();

const weekdaysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemper', 'October', 'November', 'December'];

monthText.textContent = `${monthsNames[month]}`;
weekdatText.textContent = `${weekdaysNames[weekday]}`;
dayNumberText.textContent = `${currDay}`;
yearText.textContent = `${year}`;