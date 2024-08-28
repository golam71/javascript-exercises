const convertToCelsius = function (fahr) {
  let celcius = ((fahr - 32) / 9) * 5;
  return Math.floor(celcius);
};

const convertToFahrenheit = function (celc) {
  let fahrenheit = (celc / 5) * 9 - 32;
  return Math.floor(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
