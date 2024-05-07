const dateBirth = document.querySelector("#date-birth");
const calculateBtn = document.querySelector("#calculate-btn");
const response = document.querySelector("#response");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();  // Number
const currentMonth = currentDate.getMonth() + 1;  // Number
const currentDay = currentDate.getDate();  // Number

calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const birth = dateBirth.value;

    if (birth === "") {
        alert("Please enter your date of birth");
        return;
    }

    const birthArray = birth.split("-");
    const birthYear = Number(birthArray[0]);
    const birthMonth = Number(birthArray[1]);
    const birthDay = Number(birthArray[2]);

    const yearsOld = currentYear - birthYear;

    if ((yearsOld === 0 && currentMonth < birthMonth) 
        || (yearsOld === 0 && currentMonth === birthMonth && currentDay < birthDay)) {
        alert("The given date exceed the current date.");
        return;
    } else if (currentYear < birthYear) {
        alert("The given year exceed the current date.");
        return;
    } else if (yearsOld === 0) {
        response.textContent = `You are ${yearsOld} years old`;
    } else if (yearsOld > 0 && currentMonth === birthMonth && currentDay === birthDay) {
        response.textContent = `You are ${yearsOld} years old and today it's your bithday. Happy Birthday!`;
    } else if (yearsOld > 0 && currentMonth === birthMonth && currentDay > birthDay) {
        response.textContent = `You are ${yearsOld} years old!`;
    } else if (yearsOld > 0 && currentMonth === birthMonth && currentDay < birthDay) {
        response.textContent = `You are ${yearsOld - 1} years old!`;
    } else if (yearsOld > 0 && currentMonth > birthMonth) {
        response.textContent = `You are ${yearsOld} years old!`;
    } else if (yearsOld > 0 && currentMonth < birthMonth) {
        response.textContent = `You are ${yearsOld - 1} years old!`;
    }
});