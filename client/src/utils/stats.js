// This function will take in a deck of card objects. Each non-land card should have already gone through the manaCostsCalculator function, so it will
// automatically determined the mana cost in a way that I can work with. This function will determine the probability of turn 1-10 plays.

// This needs to look through each card. If it's a land-type, we need to create a list of how many of each type we have. There are 10 2 land-types possible.
// I don't wanna brute force that. That sounds like hell. Instead, let's just make an array of dual land types.

const playNum = require("./playNum");

const stats = function(deck) {
  //   Our mana object is a count of how much mana we will have available. It will be updated based upon
  // the number of lands in the deck. At this time, this cannot take into account any creatures with "tap to gain mana"
  // abilities.
  let manaObj = {
    B: 0,
    G: 0,
    U: 0,
    R: 0,
    W: 0,
    C: 0
  };
  const deckLength = deck.length;
  // The playable array will be an array of arrays. The array at index 0 will be cards that can be paid for with 0 mana. Next will be cards that can
  // be paid for with 1 mana. etc. Lands are not included in this array.
  let playableArr = [];
  // Fill the object up with attributes.
  for (let i = 0; i < deck.length; i++) {
    let card = deck[i];
    let type = card.type_line.toLowerCase();
    if (type.includes("land")) {
      //   If a card is a land, we determine its colors. Some lands are for colorless mana, and so have no color identity. We keep track of them with
      // an integer.
      let colors = card.color_identity;
      if (colors.length < 1) {
        manaObj.C++;
      } else if (colors.length === 1) {
        // Standard lands only have 1 color, and we can keep track of them with a simple integer as well.
        manaObj[colors[0]]++;
        manaObj.C++;
        // Add in a colorless mana opportunity as well, since literally any mana can count as colorless
      }
    } else {
      playableArr.push(card);
    }
  }
  let statsDeck = playNum(manaObj, playableArr, deckLength);
  return statsDeck;
};
//   Thanks to the mana calculator, we have an array of all possible options for how to pay for a card saved in our deck. As such, we can predict
// the probability that we will be able to play a card based off of our known mana
module.exports = stats;
