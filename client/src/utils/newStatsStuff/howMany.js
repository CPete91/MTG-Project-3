const howMany = function(array, checkerArray) {
  let repeats = 0;
  checkerArray = checkerArray.join();
  for (let i = 0; i < array.length; i++) {
    if (checkerArray === array[i].join()) {
      repeats++;
    }
  }
  return repeats;
};

module.exports = howMany;
