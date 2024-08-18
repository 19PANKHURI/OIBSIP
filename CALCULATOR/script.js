const previousOperationText = document.getElementById('previous-operation');
const currentOperationText = document.getElementById('current-operation');

let currentOperation = '';
let previousOperation = '';
let operator = '';
let answer = '';

document.querySelector('.calculator-keys').addEventListener('click', (event) => {
    const target = event.target;
    const value = target.value;

    if (!target.matches('button')) return;

    switch (value) {
        case 'del':
            deleteNumber();
            break;
        case 'clear':
            clear();
            break;
        case 'ans':
            appendNumber(answer);
            break;
        case '±':
            toggleNegative();
            break;
        case '=':
        case 'ENTER':
            calculate();
            break;
        default:
            if (target.classList.contains('operator')) {
                setOperation(value);
            } else {
                appendNumber(value);
            }
            break;
    }

    updateScreen();
});

function appendNumber(number) {
    if (currentOperation === '0' && number !== '.') {
        currentOperation = number;
    } else {
        currentOperation += number;
    }
}

function setOperation(operation) {
    if (currentOperation === '') return;

    if (previousOperation !== '') {
        calculate();
    }

    operator = operation;
    previousOperation = currentOperation;
    currentOperation = '';
}

function calculate() {
    let result;

    const prev = parseFloat(previousOperation);
    const current = parseFloat(currentOperation);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        case '√':
            result = Math.sqrt(current);
            break;
        default:
            return;
    }

    answer = result;
    currentOperation = result.toString();
    operator = '';
    previousOperation = '';
}

function deleteNumber() {
    currentOperation = currentOperation.slice(0, -1);
}

function clear() {
    currentOperation = '';
    previousOperation = '';
    operator = '';
}

function toggleNegative() {
    if (currentOperation.startsWith('-')) {
        currentOperation = currentOperation.slice(1);
    } else {
        currentOperation = '-' + currentOperation;
    }
}

function updateScreen() {
    currentOperationText.textContent = currentOperation;
    previousOperationText.textContent = previousOperation + ' ' + operator;
}
