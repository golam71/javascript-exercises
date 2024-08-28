const sumAll = function (firstNumber, lastNumber) {
  let sum = 0;
  for (let i = firstNumber; i <= lastNumber; i++) {
    sum += i;
  }
  return sum;       
};

// Do not edit below this line
module.exports = sumAll;
