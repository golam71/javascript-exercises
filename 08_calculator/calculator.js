const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (data) {
  let sumOfArray = 0;
  for (let i = 0; i < data.length; i++) {
    sumOfArray += Number(data[i]);
  }
  return sumOfArray;
};

const multiply = function (data) {
  let multipleOfArray = 1;
  for (let i = 0; i < data.length; i++) {
    multipleOfArray *= Number(data[i]);
  }
  return multipleOfArray;
};

const power = function (a, b) {
  if (b !== 0) {
    return a ** b;
  }
  return 0;
};

const factorial = function (a) {
  let factorialAnswer = 1;
  if (a !== 0) {
    for (let i =1;i<a;i++){
      factorialAnswer *= i;
    }
    return factorialAnswer;
  }
  return 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
