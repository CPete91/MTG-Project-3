// PlayNum is a helper function for calculating the total number of possible plays for a given.
// It takes in an array of card objects, a mana object detailing how much mana is in the deck already,

const optionProb = require("./optionProb");

playNum = function(manaObj, cardArray, deckLength) {
  const keysArr = Object.keys(manaObj);
  for (let i = 0; i < cardArray.length; i++) {
    let playable = [];

    let totalProb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let j = 0; j < cardArray[i].options.length; j++) {
      let toAdd = optionProb(
        cardArray[i].options[j],
        manaObj,
        deckLength,
        cardArray[i].cmc
      );
      for (let k = 0; k < toAdd.length; k++) {
        totalProb[k] += toAdd[k];
      }
    }

    cardArray[i].probability = totalProb;
  }
  return cardArray;
};

module.exports = playNum;
