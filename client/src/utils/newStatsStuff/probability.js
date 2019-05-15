// This function takes in the length of the deck, one way of paying for
// a card in terms of mana, the mana object (we assume all of our mana
// comes from basic lands), and how many of this particular card are in the deck.
// It runs through all possible hypergeometric probability distributions for every
// way to pay for the card in ten turns, then sends the resulting array. This is
// gonna either be really impressive or really gosh darned stupid.
const allArrays = require("./arrays");
const colorlessAndFailure = require("./colorlessAndFailureCalcs");
const probability = function(deckLength, option, manaObj, numCard, card) {
  // We construct an array of arrays for all the ways we can draw
  // the card and each color mana. Start out with an empty array.
  // Slot 0 is the card itself. Slot 1 is B for black. Slot 2 is U for blue. Slot 3 is G for green.
  // Slot 4 is R for red. Slot 5 is W for white.
  let finalProbability = [];
  let possibilities = [[0], [0], [0], [0], [0], [0]];
  const keys = ["numCard", "B", "U", "G", "R", "W"];
  option.numCard = 1;
  manaObj.numCard = numCard;
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (option[key]) {
      for (let j = option[key]; j <= manaObj[key]; j++) {
        if (key === "numCard") {
        }
        possibilities[i].push(j);
        // Make each section of the possibilities start at the minimum
        // required mana for a success, and encompass the maximum possible mana
      }
      possibilities[i].shift();
    }
  }
  // console.log("option", option, "possibilities", possibilities);
  let allCombinations = allArrays(possibilities);
  //   Feed these into my function that will break this array of arrays down into
  // all possible combinations using one element of each sub array.

  for (let cardsInHand = 7; cardsInHand < 17; cardsInHand++) {
    let totalProbability = 0;
    for (let i = 0; i < allCombinations.length; i++) {
      let currentOption = allCombinations[i];
      let sum = 0;
      for (let j = 0; j < currentOption.length; j++) {
        sum += currentOption[j];
      }
      if (sum <= cardsInHand && card.cmc <= cardsInHand - 6) {
        // Ensure that getting the required colorless mana won't cause our hand to overflow
        totalProbability += colorlessAndFailure(
          cardsInHand,
          deckLength,
          option.C,
          currentOption,
          manaObj,
          keys,
          option
        );
        // console.log(totalProbability, "Total Prob <-");
      }
    }
    if (finalProbability.length) {
      finalProbability.push(
        totalProbability + finalProbability[finalProbability.length - 1]
      );
    } else {
      finalProbability.push(totalProbability);
    }
  }
  return finalProbability;
};
module.exports = probability;
