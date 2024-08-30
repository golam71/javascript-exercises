const sumAll = function (number1, number2) {
  if (
    number1 < 0 ||
    number2 < 0 ||
    !Number.isInteger(number1) ||
    !Number.isInteger(number2) 
  ) {
    return "ERROR";
  }
  let firstNumber, lastNumber;
  let sum = 0;
  if (number1 > number2) {
    lastNumber = number1;
    firstNumber = number2;
  }
  if (number1 < number2) {
    lastNumber = number2;
    firstNumber = number1;
  }

  for (let i = firstNumber; i <= lastNumber; i++) {
    sum = sum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
