let currentInput = '';
let previousInput = '';
let operation = undefined;

function appendNumber(number) {
    if (number === '0' && currentInput === '') return; // Prevent multiple leading zeros
    if (number === '.' && currentInput.includes('.')) return; // Prevent multiple decimals
    currentInput += number; // Concatenate the numbers as the user inputs them
    updateDisplay(); // Update display with the full expression
}

function chooseOperation(op) {
    if (currentInput === '' && previousInput === '') return; // Do nothing if there's no input
    if (previousInput !== '') {
        calculate(); // Perform calculation if an operation was already in place
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay(); // Update the display to show the operator along with the previous number
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
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
        default:
            return;
    }

    currentInput = result;
    operation = undefined;
    previousInput = '';
    updateDisplay(); // Show the result in the display
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = undefined;
    updateDisplay(); // Clear the display
}

function updateDisplay() {
    let display = previousInput;
    if (operation) {
        display += ` ${operation} `;
    }
    display += currentInput;
    document.getElementById('display').value = display || '0'; // Display the entire expression or 0 if empty
}
