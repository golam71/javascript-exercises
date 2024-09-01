const findTheOldest = function (people) {
  let i = 0;
  let age;
  let peopleArray = [];

  for (i = 0; i < people.length; i++) {
    age = people[i].yearOfDeath - people[i].yearOfBirth;
    console.log(age);
    if (typeof people[i].yearOfDeath === "undefined") {
      console.log("age is not number");
      age = new Date().getFullYear() - people[i].yearOfBirth;
    }
    peopleArray.push(age);
  }
  let sortedArray = peopleArray.toSorted(function (a, b) {
    return a - b;
  });
  let greatestAge = sortedArray[sortedArray.length - 1];
  let personIndex = peopleArray.indexOf(greatestAge);
  return people[personIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
