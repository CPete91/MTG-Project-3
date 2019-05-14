// This function will take in a deck of cards that have already gone through my mana calculator function.
// It will then return the deck with a new attribute, the probability of a play for each individual card
// in that deck.
const probability = require("./probability");

const cardProb = function(deck) {
  let manaObj = {
    B: 0,
    G: 0,
    U: 0,
    R: 0,
    W: 0,
    C: 0
  };
  const deckToReturn = [];
  let notLands = [];
  let deckLength = deck.length;
  let titles = [];
  let numCard = 0;
  let tempOdds = [];
  let finalOdds = [];

  for (let i = 0; i < deckLength; i++) {
    let card = deck[i];
    let type = card.type_line.toLowerCase();
    if (type.includes("land")) {
      //   If a card is a land, we determine its colors. Some lands are for colorless mana, and so have no color identity. We keep track of them with
      // an integer.
      let colors = card.color_identity;
      if (colors.length < 1) {
        manaObj.C++;
      } else {
        // Standard lands only have 1 color, and we can keep track of them with a simple integer as well.
        manaObj[colors[0]]++;
        manaObj.C++;
        // Add in a colorless mana opportunity as well, since literally any mana can count as colorless
      }
    } else {
      notLands.push(card);
      titles.push(card.name);
    }
  }

  for (let i = 0; i < notLands.length; i++) {
    card = notLands[i];
    numCard = 0;
    for (let j = 0; j < titles.length; j++) {
      if (titles[j] === titles[i]) {
        numCard++;
      }
    }
    cardOdds = 0;
    tempOdds = [];
    finalOdds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j < card.options.length; j++) {
      tempOdds.push(probability(deckLength, card.options[j], manaObj, numCard));
    }
    for (let j = 0; j < tempOdds.length; j++) {
      for (let k = 0; k < tempOdds[j].length; k++) {
        finalOdds[k] += tempOdds[j][k];
      }
    }
    card.probability = finalOdds;
    // console.log(finalOdds);
    deckToReturn.push(card);
  }
  return deckToReturn;
};

module.exports = cardProb;
