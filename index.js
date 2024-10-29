//CALCULATOR PROGRAM
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
    if (display.value=="Error") {
        clearDisplay();
        display.value += input;
    } else {
        display.value += input;
    }
}

function calculator() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
    display.value = eval(display.value);
}
