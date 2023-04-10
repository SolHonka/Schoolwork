let numbers = [];
let number;
while (true) {
  number = parseInt(prompt("Enter a number (0 to stop): "));
  if (number === 0) {
    break;
  }
  if (numbers.includes(number)) {
    console.log(`Number ${number} has already been given!`);
    break;
  }
  numbers.push(number);
}
numbers.sort((a, b) => a - b);
console.log(numbers);
