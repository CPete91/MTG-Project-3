const numUnique = function(array, index, oldUnique) {
  let unique = 1;
  for (let i = 0; i < index; i++) {
    unique = unique * array[i].length;
  }
  return unique;
};

module.exports = numUnique;
