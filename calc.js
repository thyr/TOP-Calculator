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
  calcHistory = "",
  operated = false;

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
  if (num1 == 0 || num2 == 0) {
    num1 = "";
    num2 = "";
    return (input.textContent = "Paradox!");
  } else {
    return parseFloat(num1) / parseFloat(num2);
  }
}

function power(num1, num2) {
  let powerResult = 0;
  for (let times = 1; times < parseInt(num2); times++) {
    powerResult += parseFloat(num1) * parseFloat(num1);
  }
  return powerResult;
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
    case "Xy":
      return power(num1, num2);
  }
}

function showNumber(button) {
  input.textContent += button.textContent;
}

function showDecimal(button) {
  if (input.textContent.includes(".") === false) {
    input.textContent += button.textContent;
  } else {
    return;
  }
}

function operatorHandle(action) {
  if (num1 === "") {
    num1 = input.textContent;
    operator = action.textContent;
    operated = false;
    history.textContent = num1.toString() + " " + operator.toString();
    input.textContent = "";
  } else {
    num2 = input.textContent;
    history.textContent =
      num1.toString() + " " + operator.toString() + " " + num2.toString();
    result = operate(num1, operator, num2);
    input.textContent = Math.round((result + Number.EPSILON) * 100) / 100;
    num1 = "";
    num2 = "";
    operated = true;
  }
}

function clearDisplay(task) {
  if (task.id === "clear") {
    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    operated = false;
    history.textContent = "";
    input.textContent = "";
  } else if (task.id === "back") {
    input.textContent = input.textContent.slice(0, -1);
  }
}

function buttonListener() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("number") && operated == false) {
        showNumber(button);
      } else if (button.classList.contains("number") && operated == true) {
        clearDisplay(clear);
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
