const multi = function(arr) {
  const compare = function(obj1, obj2) {
    //Loop through properties in object 1
    for (var p in obj1) {
      //Check property exists on both objects
      if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

      switch (typeof obj1[p]) {
        //Deep compare objects
        case "object":
          if (!Object.compare(obj1[p], obj2[p])) return false;
          break;
        //Compare function code
        case "function":
          if (
            typeof obj2[p] == "undefined" ||
            (p != "compare" && obj1[p].toString() != obj2[p].toString())
          )
            return false;
          break;
        //Compare values
        default:
          if (obj1[p] != obj2[p]) return false;
      }
    }

    //Check object 2 for any extra properties
    for (var p in obj2) {
      if (typeof obj1[p] == "undefined") return false;
    }
    return true;
  };

  // The above function taken from github. Link to github repository: https://gist.github.com/nicbell/6081098
  // Essentially, we're looping through all of the attributes of the objects and checking that they're identical.
  // We're also double checking if either object has an attribute that the other does not.

  // arr is expected to be a 1 x n array of 1 x 2 arrays.
  let options = Math.pow(2, arr.length);
  //   options is the total number of possible combinations for n element taken 2 at a time. We can safely say 2
  // at a time because that's how magic works. Dave said so. No take backsies, Wizards of the Coast!
  let finalArr = [];
  for (let i = 0; i < options / 2; i++) {
    finalArr.push([arr[0][0]]);
  }
  for (let i = 0; i < options / 2; i++) {
    finalArr.push([arr[0][1]]);
  }

  //   console.log(finalArr);
  // We create a final array that is composed of one array for each possible combination. We initially populate half of the array with the 0th mana type of
  // the first option, and the other half of the array with the 1st mana type of the first option. We will use this 50% fill rate to inform all subsequent calculations.

  for (let i = 1; i < arr.length - 1; i++) {
    // Index this loop at 1, because we already pre-populated our final array with the 0th value.
    let zerozero = 0;
    let zeroone = 0;
    let oneone = 0;
    let onezero = 0;
    for (let j = 0; j < finalArr.length; j++) {
      if (j === 0) {
        finalArr[j].push(arr[i][0]);
        zerozero++;
      } else if (finalArr[j][i - 1] === arr[i - 1][0]) {
        if (zerozero < options / 4) {
          finalArr[j].push(arr[i][0]);

          zerozero++;
        } else if (zeroone < options / 4) {
          finalArr[j].push(arr[i][1]);

          zeroone++;
        }
      } else if (finalArr[j][i - 1] === arr[i - 1][1]) {
        if (onezero < options / 4) {
          finalArr[j].push(arr[i][0]);
          onezero++;
        } else if (oneone < options / 4) {
          finalArr[j].push(arr[i][1]);
          oneone++;
        }
      }
    }
  }

  for (let i = 0; i < finalArr.length; i++) {
    if (i % 2 === 0) {
      finalArr[i].push(arr[arr.length - 1][1]);
    } else {
      finalArr[i].push(arr[arr.length - 1][0]);
    }
  }

  for (let i = 0; i < finalArr.length - 1; i++) {
    for (let j = i + 1; j < finalArr.length; j++) {
      if (compare(finalArr[i], finalArr[j])) {
        finalArr.splice(j, 1);
      }
    }
  }
  // Eliminate all duplicate entries. R G G should be seen as identical to G G R, but this currently does not. This ought to fix the issue.
  return finalArr;
};
module.exports = multi;
