const calculationInput = document.getElementById("calculation");
const calculateButton = document.getElementById("start");
const resultElement = document.getElementById("result");

function calculate() {
  const calculation = calculationInput.value;
  const operators = ["+", "-", "*", "/"];

  for (let i = 0; i < operators.length; i++) {
    if (calculation.includes(operators[i])) {
      const parts = calculation.split(operators[i]);
      const num1 = parseInt(parts[0], 10);
      const num2 = parseInt(parts[1], 10);
      let result;

      switch(operators[i]) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          break;
      }

      resultElement.textContent = result;
      return;
    }
  }

  resultElement.textContent = "Invalid calculation";
}

calculateButton.addEventListener("click", calculate);
