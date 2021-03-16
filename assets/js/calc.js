const outputScreen = document.getElementById('output-screen');

const pointButton = document.getElementById('button-point');
const plusButton = document.getElementById('button-plus');
const minusButton = document.getElementById('button-minus');
const multiplyButton = document.getElementById('button-multiply');
const divideButton = document.getElementById('button-divide');
const equalsButton = document.getElementById('button-equals');

var screenNumber = '';
var buttonPressed;
var firstNumber;
var secondNumber;
var finalNumberScreen;

equalsButton.disabled = true;

function numberButtonPressed(number) { 
    screenNumber += number.toString();
    outputScreen.innerHTML = screenNumber;
    completeNumber = parseFloat(screenNumber);
}

function clearButtonPressed() {
    screenNumber = '';
    completeNumber = 0;
    outputScreen.innerHTML = screenNumber;
    pointButton.disabled = false;
    equalsButton.disabled = true;
}

function pointButtonPressed() {
    screenNumber += '.';
    outputScreen.innerHTML = screenNumber;
    pointButton.disabled = true;
}

function functionButtonPressed(functionSelected) {
    pointButton.disabled = false;
    equalsButton.disabled = false;
    firstNumber = parseFloat(screenNumber);
    screenNumber = '';
    outputScreen.innerHTML = screenNumber;
    buttonPressed = functionSelected;
}

function equalsButtonPressed() {
    
    secondNumber = parseFloat(screenNumber);

    if (buttonPressed === 'Plus') {
        finalNumber = firstNumber + secondNumber;
    } else if (buttonPressed === 'Minus') {
        finalNumber = firstNumber - secondNumber;
    } else if (buttonPressed === 'Divide') {
        finalNumber = firstNumber / secondNumber;
    } else if (buttonPressed === 'Multiply') {
        finalNumber = firstNumber * secondNumber;
    }

    finalNumberScreen = finalNumber.toString();
    outputScreen.innerHTML = finalNumberScreen;

    if (finalNumberScreen === 'NaN') {
        outputScreen.innerHTML = 'Error: Try again.';
    }
}