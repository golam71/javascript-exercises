const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (...numbers) {
  let numberArray = [...numbers];
  let sumOfNumbers = 0;
  numberArray.map((item) => {
    sumOfNumbers += item;
  });
  return sumOfNumbers;
};

const multiply = function (a, b) {
  return a * b;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a, b) {
  return Math.floor(a ** -b);
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
