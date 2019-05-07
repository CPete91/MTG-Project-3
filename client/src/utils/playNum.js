// PlayNum is a helper function for calculating the total number of possible plays for a given.
// It takes in an array of card objects, a mana object detailing how much mana is in the deck already,

const optionProb = require("./optionProb");

playNum = function(manaObj, cardArray, deckLength) {
  const keysArr = Object.keys(manaObj);
  for (let i = 0; i < cardArray.length; i++) {
    let playable = [];
    //   First, confirm that the deck can even play the card. We create an array that is the same length as the options.
    //   If an option is not playable, we will push false. If it is playable, we will push true. In this way, we can ensure that we only analyze a card
    // that can be played.
    // console.log(cardArray);
    for (let j = 0; j < cardArray[i].options.length; j++) {
      keysArr.forEach(key => {
        if (manaObj[key] < cardArray[i].options[j][key]) {
          playable.push(false);
        }
      });
    }

    if (playable.indexOf(true) !== -1) {
      console.log("Playable");
      let totalProb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let j = 0; j < playable.length; j++) {
        if (playable[j]) {
          let toAdd = optionProb(
            cardArray[i].options[j],
            manaObj,
            deckLength,
            cardArray[i].cmc
          );
          for (let i = 0; i < toAdd.length; i++) {
            totalProb[i] += toAdd[i];
          }
        }
      }
      cardArray[i].probability = totalProb;
    }
  }
  return cardArray;
};

module.exports = playNum;
