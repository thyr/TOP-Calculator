const input = document.querySelector("#calcInput"),
  history = document.querySelector("#calcHistory"),
  buttons = document.querySelectorAll(".symbol"),
  operators = document.querySelectorAll(".operator"),
  operatorsObj = {
    "^": "power",
    "/": "divide",
    "*": "multiply",
    "-": "subtract",
    "+": "add",
  },
  equals = document.querySelector("#equals"),
  decimal = document.querySelector("#decimal");

let num1 = "",
  num2 = "",
  operator = "",
  operatorState = 'off',
  calcHistory = "",
  calcAnswer = "";

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

function displayInput(button) {
  if (button.textContent in operatorsObj) {
    operatorState = 'on';
  }
  switch (operatorState) {
    case 'off':
      num1 += button.textContent;
      break;
    case 'on':
      num2 += button.textContent;
      break;
  }

  input.textContent = `${num1.toString()} ${operator.toString()} ${num2.toString()}`;
}

function buttonListener() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("number")) {
        operatorState = 'off';
        displayInput(button);
      } else if (button.classList.contains("operator")) {
        displayInput(button);
        operator = button.textContent;
      } else if (button.classList.contains("equals")) {
        operateHandler();
      }
    });
  });
}

buttonListener();
