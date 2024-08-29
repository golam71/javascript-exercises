const repeatString = function (string, repeatNumber) {
  let newString = "";
  if (repeatNumber < 0) {
    return "ERROR";
  }
  for (let i = 0; i < repeatNumber; ++i) {
    newString += string;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
