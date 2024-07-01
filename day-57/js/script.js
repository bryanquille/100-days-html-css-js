const screen = document.querySelector('#screen');
const resetBtn = document.querySelector('.reset');
const operationsBtns = document.querySelectorAll('.operations');
const numbersBtns = document.querySelectorAll('.numbers');
const equalBtn = document.querySelector('.equal');
let calculation = '';
let calculationToScreen = '';

const reset = () => {
    calculation = '';
    calculationToScreen = '';
    screen.textContent = '';
}

resetBtn.addEventListener('click', () => {
    reset();
});

operationsBtns.forEach(operation => {
    operation.addEventListener('click', () => {
        const operationValue = operation.value;
        switch (operationValue) {
            case '÷':
                calculation += '/';
                break;
            case 'x':
                calculation += '*';
                break;
            case '-':
                calculation += '-';
                break;
            case '+':
                calculation += '+';
                break;
        }
        calculationToScreen += operation.value;
        screen.textContent = calculationToScreen;
    });
});

numbersBtns.forEach(number => {
    number.addEventListener('click', () => {
        const numberValue = number.value;
        if (numberValue === 'π') {
            calculation += Math.PI;
            calculationToScreen += numberValue;

            const regex = /[\d\.][π]/gm;
            if (regex.test(calculationToScreen)) {
                calculation = calculation.split('');
                calculation.splice(1, 0, '*');
                calculation = calculation.join('');
            }

            screen.textContent = calculationToScreen;
            return;
        }
        calculation += numberValue;
        calculationToScreen += number.value;
        screen.textContent = calculationToScreen;
    });
});

equalBtn.addEventListener('click', () => {
    const regex = /[π][\d\.]/gm;
    if (regex.test(calculationToScreen)) {
        screen.textContent = 'Error';
        return;
    }

    try {
        const response = eval(calculation);
        screen.textContent = response;
    } catch (error) {
        screen.textContent = 'Error';
    }
});
