const factorials = require("./factorials");
const nx = function(n, x) {
  //   n is the total population of an option in the deck.
  // x is the number of that option that we draw.
  let num = factorials[n];
  let denom = factorials[x];
  let erator = factorials[n - x];
  return num / (denom * erator);
};

module.exports = nx;
