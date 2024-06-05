const loanCalculator = document.querySelector('#loan-calculator');
const loanAmount = document.querySelector('#loan-amount');
const interestRate = document.querySelector('#interest-rate');
const monthsToPay = document.querySelector('#months-to-pay');
const monthlyPayment = document.querySelector('#monthly-payment');

loanCalculator.addEventListener('submit', (e) => {
    e.preventDefault();
    const loanAmountValue = Number(loanAmount.value);
    const interestRateValue = Number(interestRate.value);
    const monthsToPayValue = Number(monthsToPay.value);
    const totalToPay = loanAmountValue + (loanAmountValue * (interestRateValue / 100));
    const monthlyPaymentValue = totalToPay / monthsToPayValue;
    monthlyPayment.textContent = monthlyPaymentValue.toFixed(2);
});