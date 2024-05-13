const userInput = document.querySelector('#user-input');
const kgWeight = document.querySelector('#kg-weight');

const covertWeightToKg = (pounds) => {
    return (Number(pounds) * (1 / 2.2)).toFixed(2);
}

userInput.addEventListener('input', () => {
    const value = userInput.value;
    const response =  covertWeightToKg(value);
    kgWeight.textContent = response;
});