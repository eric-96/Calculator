    
    // QUERY SELECTORS && EVENT LISTENERS
    const numberButtons = document.querySelectorAll('[data-number]');
    numberButtons.forEach(button => button.addEventListener('click', addNumber));

    const operatorButtons = document.querySelectorAll('[data-operator]');
    operatorButtons.forEach(button => button.addEventListener('click', chooseOperator));

    const equalsButton = document.querySelector('.equal-sign');
    equalsButton.addEventListener('click', calculate);
   
    const plusMinus = document.querySelector('#plus-minus');
    plusMinus.addEventListener('click', shiftPlusMinus);
    
    const dot = document.querySelector('#dot');
    dot.addEventListener('click', addDot);
    
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
       // lastOperationScreen.textContent = `${firstNum} ${operator}`;
        //displayContent.textContent = '0'
    }

    function calculate() {
        let num1 = parseFloat(firstNum);
        let num2 = parseFloat(secondNum);
    switch (operator) {
        case "+":
        result = num1 + num2;
        break;
        case "-":
        result = num1 - num2;
        break;
        case "×":
        result = num1 * num2;
        break;
        case "÷":
        result = num1 / num2;
        break;
        case "%":
        result = num1 % num2;
        break;
        default:
        return;
        }
        // Here I want to display decimals ONLY if needed!
        if (Number.isInteger(result)) {
            result = result.toFixed(0);
        } else {
            result = result.toFixed(2);
        }
        displayContent.textContent = result;
        lastOperationScreen.textContent = `${firstNum} ${operator} ${secondNum}`;
        firstNum = result;
        // Here I don't need the '=' sign to stay highligthed (focus).
        equalsButton.blur();
        secondNum = "";
        operator = "";
        result = "";
        }

    function shiftPlusMinus() {
        if (operator === '') {
            if (firstNum !== '') {
            firstNum = (parseFloat(firstNum) * -1).toString();
            displayContent.textContent = firstNum;
            }
        } else {
        if (secondNum !== '') {
        secondNum = (parseFloat(secondNum) * -1).toString();
        displayContent.textContent = secondNum;
        }}}

        function addDot() {
        if (operator === "" && !firstNum.includes(".")) {
            firstNum += ".";
            displayContent.textContent = firstNum;
        } else if (operator !== "" && !secondNum.includes(".")) {
            secondNum += ".";
            displayContent.textContent = secondNum;
        }
          }
          
          
        function clear() {
        firstNum = "";
        secondNum = "";
        operator = "";
        result = "";
        displayContent.textContent = "0";
        lastOperationScreen.textContent = "";
        }

