const form = document.querySelector('#form');
const fromCurrency = document.querySelector('#from');
const toCurrency = document.querySelector('#to');
const fromValue = document.querySelector('#from-value');
const toValue = document.querySelector('#to-value');
const result = document.querySelector('#result');

const changeCurrency = async () => {
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;
    const amount = fromValue.value;
    const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrencyValue}&to=${toCurrencyValue}`);
    const data = await response.json();
    if (fromCurrencyValue === toCurrencyValue) {
        toValue.value = amount;
        result.textContent = `${amount} ${fromCurrencyValue} = ${amount} ${toCurrencyValue}`;
    }
    toValue.value = data.rates[toCurrencyValue];
    result.textContent = `${amount} ${fromCurrencyValue} = ${data.rates[toCurrencyValue]} ${toCurrencyValue}`;
}

changeCurrency();

form.addEventListener('change', () => {
    changeCurrency();
});

fromValue.addEventListener('input', () => {
    changeCurrency();
});