const resultInput = document.getElementById('result');

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    const lastChar = resultInput.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        resultInput.value = resultInput.value.slice(0, -1) + operator;
    } else if (resultInput.value !== "") {
        resultInput.value += operator;
    }
}

function clearDisplay() {
    resultInput.value = "";
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculate() {
    try {
        if (resultInput.value !== "") {
            resultInput.value = eval(resultInput.value);
        }
    } catch (error) {
        resultInput.value = "Error";
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}
