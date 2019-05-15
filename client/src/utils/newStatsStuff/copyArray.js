const copyArray = function(arr) {
  const copied = [];
  for (let i = 0; i < arr.length; i++) {
    copied.push(arr[i]);
  }

  return copied;
};

module.exports = copyArray;
