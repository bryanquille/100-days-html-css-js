const form = document.querySelector('#form');
const number = document.querySelector('#number');
const response = document.querySelector('#response');

function narcissistic(value) {
    const power = String(value).length;
    const result = String(value).split("").reduce((acc, num) => acc + Math.pow(Number(num), power), 0);
    console.log(value === result);
    return value === result;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const numberValue = Number(number.value);
    if (Number.isInteger(numberValue)) {
        if (narcissistic(numberValue)) {
            response.textContent = "It's a narcissistic number!";
        } else {
            response.textContent = "It's not a narcissistic number!";
        }
    } else {
        alert('Please insert an integer value!')
    }
});
