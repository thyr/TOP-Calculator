const input = document.querySelector("#calcInput"),
  history = document.querySelector("#calcHistory"),
  buttons = document.querySelectorAll(".symbol"),
  operators = document.querySelectorAll(".operator"),
  equals = document.querySelector("#equals"),
  decimal = document.querySelector("#decimal");

let num1 = "",
  num2 = "",
  operator = "",
  result = "",
  calcInput = "",
  calcHistory = "";

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
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

function showNumber(button) {
  if (calcInput === "") {
    input.textContent += button.textContent;
  } else {
  }
}

function operatorHandle(action) {
  if (num1 === "") {
    num1 = input.textContent;
    operator = action.textContent;
    history.textContent = num1.toString() + " " + operator.toString();
    input.textContent = "";
  } else {
    num2 = input.textContent;
    history.textContent =
      num1.toString() + " " + operator.toString() + " " + num2.toString();
    result = operate(num1, operator, num2);
    input.textContent = result;
  }
}

function clearDisplay(task) {
  if (task.id === "clear") {
    num1 = "";
    num2 = "";
    operator = "";
    history.textContent = "";
    input.textContent = "";
  } else if (task.id === "back") {
    input.textContent = input.textContent.slice(0, -1);
  }
}

function buttonListener() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("number")) {
        showNumber(button);
      } else if (button.classList.contains("operator")) {
        operatorHandle(button);
      } else if (button.id === "decimal") {
        showDecimal(button);
      } else if (button.id === "equals") {
        operate(button);
      } else if (button.id === "clear") {
        clearDisplay(button);
      } else if (button.id === "back") {
        clearDisplay(button);
      }
    });
  });
}

buttonListener();
