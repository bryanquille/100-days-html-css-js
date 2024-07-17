const amountValues = document.querySelectorAll('.amount-value');
const amountBars = document.querySelectorAll('.amount-bar');
const days = document.querySelectorAll('.day');
let weekValues = [];

const showData = async () => {
    const response = await fetch('./data/data.json');
    const data = await response.json();

    days.forEach((day, index) => {
        day.textContent = data[index].day;
    });

    amountValues.forEach((value, index) => {
        value.textContent = `$${data[index].amount}`;
        weekValues.push(data[index].amount);
    });

    const max = Math.max(...weekValues);

    amountBars.forEach((bar, index) => {
        const val = (data[index].amount * 120) / max;
        bar.style = `height: ${val}px`;

        if (data[index].amount === max) {
            bar.classList.add('max-bg-color');
        }
    });
}

showData();

amountBars.forEach((bar, index) => {
    bar.addEventListener('mouseover', () => {
        amountValues[index].classList.remove('hid-amount-value');
        amountValues[index].classList.add('show-amount-value');
    });
});

amountBars.forEach((bar, index) => {
    bar.addEventListener('mouseout', () => {
        amountValues[index].classList.add('hid-amount-value');
        amountValues[index].classList.remove('show-amount-value');
        
    });
});
