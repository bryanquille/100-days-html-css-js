const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const calculateBtn = document.querySelector('#calculate-btn');
const inputResult = document.querySelector('#input-result');
const textResult = document.querySelector('#text-result');
const form = document.querySelector('#form');

const calculateBmi = (h, w) => {
    return (Number(w) / ((Number(h)/100)**(2))).toFixed(2);
}

const weightLevel = (bmi) => {
    if (bmi < 18.5) return 'Under weight';
    else if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
    else if (bmi >= 25 && bmi < 30) return 'Overweight';
    else if (bmi > 30) return 'Obesity';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const heightValue = heightInput.value;
    const weightValue = weightInput.value;
    const bmi = calculateBmi(heightValue, weightValue);
    if (isNaN(bmi)) {
        alert('Please enter a number in the input field');
        return;
    }
    inputResult.value = bmi;
    textResult.textContent = weightLevel(bmi);
});