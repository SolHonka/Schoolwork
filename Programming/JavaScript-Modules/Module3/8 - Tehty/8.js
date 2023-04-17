const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const result = document.getElementById('result');
const calculateBtn = document.getElementById('start');

function calculate() {
  const value1 = parseInt(num1.value);
  const value2 = parseInt(num2.value);
  let operationResult;

  switch (operation.value) {
    case 'add':
      operationResult = value1 + value2;
      break;
    case 'sub':
      operationResult = value1 - value2;
      break;
    case 'multi':
      operationResult = value1 * value2;
      break;
    case 'div':
      operationResult = value1 / value2;
      break;
    default:
      operationResult = '';
      break;
  }

  result.innerText = `Result: ${operationResult}`;
}

calculateBtn.addEventListener('click', calculate);
