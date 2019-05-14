// The goal here is to define a set of functions that will take in an array of arrays and output all possible combinations using one element from each array.

const numUnique = require("./numUnique");

const howMany = require("./howMany");

const copyArray = require("./copyArray");

const allArrays = function(arr) {
  let options = 1;
  let temp = [];
  let unique = 1;
  let numAllowed = 0;
  let subArray = [];
  // Find how many options we are. That's just the product of the lengths of all sub arrays
  for (let i = 0; i < arr.length; i++) {
    options = options * arr[i].length;
  }

  // Make our final array the appropriate length. it will need one array for each possible combination
  const finalArray = [];
  for (let i = 0; i < options; i++) {
    finalArray.push([]);
  }

  for (let i = 0; i < arr.length; i++) {
    subArray = arr[i];
    unique = numUnique(arr, i, unique);
    numAllowed = ((1 / unique) * options) / subArray.length;
    for (let j = 0; j < subArray.length; j++) {
      for (let k = 0; k < finalArray.length; k++) {
        temp = copyArray(finalArray[k]);
        temp.push(subArray[j]);
        if (
          finalArray[k].length < i + 1 &&
          howMany(finalArray, temp) < numAllowed
        ) {
          finalArray[k].push(subArray[j]);
        }
      }
    }
  }
  return finalArray;
};

module.exports = allArrays;
