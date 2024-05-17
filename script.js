var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operator = null;
var operand2 = null;

function isOperator(value) {
  return value === '+' || value === '-' || value === '*' || value === '/';
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    var value = this.getAttribute('data-value');
    var text = display.textContent.trim();

    if (value === 'AC') {
      display.textContent = "";
    } else if (isOperator(value)) {
      operator = value;
      operand1 = parseFloat(text);
      display.textContent = "";
    } else if (value === "sign") {
      operand1 = parseFloat(text);
      operand1 = -1 * operand1;
      display.textContent = operand1;
    } else if (value === "%") {
      operand1 = parseFloat(text);
      operand1 = operand1 / 100;
      display.textContent = operand1;
    } else if (value === "=") {
      operand2 = parseFloat(text);
      if (operator !== null && operand2 !== null) {
        var result = eval(operand1 + " " + operator + " " + operand2);
        if (result !== null) {
          operand1 = result;
          operator = null;
          operand2 = null;
          display.textContent = result;
        }
      }
    } else {
      display.textContent += value;
    }
  });
}
