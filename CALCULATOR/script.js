let display = document.getElementById('display');
let input = '';

function appendToDisplay(value) {
    input += value;
    display.innerHTML = input;
}

function clearDisplay() {
    input = '';
    display.innerHTML = '0';
}

function calculate() {
    try {
        input = eval(input).toString();
        display.innerHTML = input;
    } catch (error) {
        display.innerHTML = 'Error';
    }
}
