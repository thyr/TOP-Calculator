let operandOne, operandTwo, operator;

function add(operandOne, operandTwo) {
  return parseInt(operandOne) + parseInt(operandTwo);
}

function subtract(operandOne, operandTwo) {
  return parseInt(operandOne) - parseInt(operandTwo);
}

function multiply(operandOne, operandTwo) {
  return parseInt(operandOne) * parseInt(operandTwo);
}

function divide(operandOne, operandTwo) {
  return parseInt(operandOne) / parseInt(operandTwo);
}

function operate(operandOne, operator, operandTwo) {
  switch (operator) {
    case "+":
      return add(operandOne, operandTwo);
    case "-":
      return subtract(operandOne, operandTwo);
    case "*":
      return multiply(operandOne, operandTwo);
    case "/":
      return divide(operandOne, operandTwo);
  }
}
