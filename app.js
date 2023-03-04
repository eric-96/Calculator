    
    // QUERY SELECTORS && EVENT LISTENERS
    const numberButtons = document.querySelectorAll('[data-number]');
    numberButtons.forEach(button => button.addEventListener('click', addNumber));

    const operatorButtons = document.querySelectorAll('[data-operator]');
    operatorButtons.forEach(button => button.addEventListener('click', chooseOperator));

    const equalsButton = document.querySelector('.equal-sign');
    equalsButton.addEventListener('click', calculate);

    const clearButton = document.querySelector('[data-operator="clear"]');
    clearButton.addEventListener('click', clear);

    const displayContent = document.querySelector(".display-content");
    const lastOperationScreen = document.getElementById("lastOperationScreen");
    let firstNum = '';
    let secondNum = '';
    let operator = '';
    let result = '';

    function addNumber() {
    const number = this.dataset.number;
    if (operator === "") {
        firstNum += number;
        displayContent.textContent = firstNum;
    } else {
        secondNum += number;
        displayContent.textContent = secondNum;
    }
    }

    function chooseOperator() {
        if (firstNum === "") {
            return;
        }
        operator = this.dataset.operator;
        lastOperationScreen.textContent = `${firstNum} ${operator}`;
        displayContent.textContent = '0'
    }

    function calculate() {
    switch (operator) {
        case "+":
        result = firstNum + secondNum;
        break;
        case "-":
        result = firstNum - secondNum;
        break;
        case "×":
        result = firstNum * secondNum;
        break;
        case "÷":
        result = firstNum / secondNum;
        break;
        case "%":
        result = firstNum % secondNum;
        break;
        default:
        return;
    }
    displayContent.textContent = result;
   // lastOperationScreen.textContent = `${firstNum} ${operator} ${secondNum} = ${result}`;
    firstNum = result;
    secondNum = "";
    operator = "";
    result = "";
    }

    function clear() {
    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
    displayContent.textContent = "0";
    lastOperationScreen.textContent = "";
    }

