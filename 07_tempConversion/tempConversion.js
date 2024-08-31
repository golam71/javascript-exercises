const convertToCelsius = function (fahr) {
  let celcius = ((fahr - 32) / 9) * 5;
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function (calc) {
  let fahrenheit = ((calc / 5) * 9 )+ 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
