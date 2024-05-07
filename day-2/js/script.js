const billAmount = document.querySelector("#bill-amount");
const tipPercentage = document.querySelector("#tip-percentage");
const calculateBtn = document.querySelector("#calculate-btn");
const totalText = document.querySelector("#total-text");

const calculateTip = (bill, percentage) => {
    return bill + (bill * (percentage / 100));
}

calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const amount = Number(billAmount.value);
    const percentage = Number(tipPercentage.value);

    if (amount === 0 || percentage === 0) {
        alert("Please give the values to calculate the total to pay.");
        return;
    }

    const response = calculateTip(amount, percentage).toFixed(2);

    totalText.innerHTML = `Total: <span class="bold">$${response}</span>`;
});