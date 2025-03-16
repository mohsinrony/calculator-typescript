// Define the necessary variables
let currentInput: string = '';
let previousInput: string = '';
let currentOperator: string | null = null;

// Function to update the display
function updateDisplay(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = currentInput || '0'; // Default to '0' if currentInput is empty
    } else {
        console.error('Display element not found');
    }
}

// Function to append a number to the current input value
function inputNumber(num: number): void {
    currentInput += num.toString();
    console.log('Number Input:', currentInput);
    updateDisplay();
}
(window as any).inputNumber = inputNumber;
// Function to set the current operation
function inputOperator(op: string): void {
    if (currentInput === '') {
        console.log('Operator skipped: No current input');
        return; // Prevent operator input when current input is empty
    }

    if (previousInput !== '') {
        calculateResult(); // Calculate if there is a previous input and an operator
    }

    currentOperator = op;
    previousInput = currentInput;
    currentInput = ''; // Reset current input for next number
    console.log('Operator Set:', currentOperator);
    console.log('Previous Input:', previousInput);
    updateDisplay();
}

// Function to calculate the result of the operation
function calculateResult(): void {
    if (previousInput === '' || currentInput === '' || currentOperator === null) {
        console.log('Calculation skipped: Missing input or operator');
        return;
    }

    let result: number;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (currentOperator) {
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
            if (current === 0) {
                alert('Cannot divide by zero');
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            console.error('Invalid operator:', currentOperator);
            return;
    }

    currentInput = result.toString();
    currentOperator = null;
    previousInput = '';
    console.log('Result Calculated:', currentInput);
    updateDisplay();
}

// Function to clear the current and previous input values, and reset the operator
function clearDisplay(): void {
    currentInput = '';
    previousInput = '';
    currentOperator = null;
    console.log('Display Cleared');
    updateDisplay();
}

// Initialize the calculator
updateDisplay(); // Set display to '0' initially