const operator1 = document.querySelector('#operator-1');
const operator2 = document.querySelector('#operator-2');
const operatorSign = document.querySelector('#operator-sign');
const solutionContainer = document.querySelector('#solution-container');
const answer = document.querySelector('#answer');
const solveBtn = document.querySelector('#solve-btn');

const showSolution = () => {
    solutionContainer.classList.remove('hidden-answer');
    solutionContainer.classList.add('visible-answer');
}

solveBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const operator1Value = operator1.value;
    const operator2Value = operator2.value;
    const operatorSignValue = operatorSign.value;

    let sign = '';
    switch (operatorSignValue) {
        case '+':
            sign = '➕';
            break;
        case '-':
            sign = '➖';
            break;
        case '*':
            sign = '✖️'
            break;
        case '/':
            sign = '➗'
            break;
        default:
            break;
    }
    
    if (operator1Value === '' || operator2Value === '') {
        alert('Please fill out the fields to calculate!');
        return;
    }

    let calculated = null;
    
    if (operatorSignValue === '/') {
        calculated = eval(`${operator1Value}${operatorSignValue}${operator2Value}`).toFixed(2);
    } else {
        calculated = eval(`${operator1Value}${operatorSignValue}${operator2Value}`);
    }


    const lenOp1 = operator1Value.length;
    const lenOp2 = operator2Value.length;
    const lenCalculated = String(calculated).length;
    const maxLength = Math.max(lenOp1, lenOp2, lenCalculated) + 3;

    answer.innerHTML = `
    ${operator1Value}<br>
    ${sign}  ${operator2Value}<br>
    ${'_'.repeat(maxLength)}<br>
    ${calculated}`;

    showSolution();
});
