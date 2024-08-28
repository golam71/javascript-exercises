const reverseString = function (string) {
  let charArray = string.split("");
  let revArray = []; //use at for loop later
  let length = charArray.length;
  for (let i = 0; i <= length; i++) {
    revArray.push(charArray[length - i]);
    // get the max number of chars and - em to get the i from backwards
  }
  let reversedString = revArray.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
