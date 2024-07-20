const dateInfo = document.querySelector("#date-info");
const timeInfo = document.querySelector("#time-info");
const userInput = document.querySelector("#user-input");
const results = document.querySelector("#results-div");
const checkButton = document.querySelector("#check-btn");
const clearBurtton = document.querySelector("#clear-btn");
const regex = /(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}/;

const getWeekDay = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()]
}

const getMonthString = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[date.getMonth()]
}

const showDate = () => {
    const date = new Date();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    dateInfo.textContent = `${getWeekDay(date)}, ${day} ${getMonthString(date)}`;
    timeInfo.textContent = `${hours}:${String(minutes).length === 1 ? "0".concat("",String(minutes)): minutes}`;
}

const checkingNumber = (regex, value) => {
    const coincidence = value.match(regex);
    const valid = `Valid US number: ${value}`;
    const invalid = `Invalid US number: ${value}`;

    // Verifying if the phone number ends with a number or if there's not match
    if (isNaN(value.slice(-1)) || coincidence === null) {
        return invalid;
    }
    
    if (value.startsWith("1") || value.startsWith("1 ")) {
        const phoneNumber = value.slice(1).trim();
        return phoneNumber === coincidence[0] ? valid : invalid;
    } else {
        return value === coincidence[0] ? valid : invalid;
    }
};


// Checking if the number is valid
checkButton.addEventListener("click", () => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
    }
    const value = userInput.value;
    results.textContent = checkingNumber(regex, value);
});

// Clearing results
clearBurtton.addEventListener("click", () => results.textContent = "");

// Showing Date on the phone screen
showDate();
setInterval(() => showDate(), 1000);