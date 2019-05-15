// This function will take in an option with all of the mandatory colored mana accounted
// for, the size of the deck, the number of cards in the hand, the amount of colorless
// mana required, the keys, and how many of a card are in the deck accounted for.
// It will calculate and return the hypergeometric probability of drawing that
// exact hand and return it. It will take its sweet, sweet time to do so. Stats are gonna
// take hella long to load, cuz this is brute force, baby!
const nx = require("./nx");
const colorlessAndFailure = function(
  cardsInHand,
  deckLength,
  colorless,
  option,
  manaObj,
  keys,
  basePayment
) {
  let sum = 0;
  for (let i = 0; i < option.length; i++) {
    sum += option[i];
  }
  let manaSum = 0;
  let excessMana = 0;
  for (let i = 0; i < keys.length; i++) {
    manaSum += manaObj[keys[i]];
  }
  for (let i = 1; i < keys.length; i++) {
    excessMana += option[i] - basePayment[keys[i]];
  }
  const totalUndesirable = deckLength - manaSum - option[0];
  //   We'll need the total number of undesirable cards in the deck to calculate our
  // hypergeometric probability. Since we want to draw EXACTLY as many of the playable card and the
  // specifically colored mana that we specified, our undesirable population is all of the cards
  // that aren't any of those things.
  let maxColorless = cardsInHand - sum;
  if (excessMana >= colorless) {
    colorless = 0;
  }
  let manaUsed = sum - option[0];
  // Recall that our option consists of the number of the playable, non-mana cards that we draw (element 0)
  // and all of the non-colorless mana (all of the other mana). Thus, the total amount of mandatory colored mana that
  // we used is represented above.
  let undesirable = 0;
  let probability = 0;
  let denominator = nx(deckLength, cardsInHand);

  for (
    let numColorless = colorless;
    numColorless <= maxColorless;
    numColorless++
  ) {
    if (numColorless <= manaObj.C - manaUsed) {
      undesirable = maxColorless - colorless;
      // We need a full hand of cards. We assume that any cards not occupied by a colorless
      // mana, colored mana, or a copy of the card that must be played, are one of the cards
      // that are none of those things. (not a mana, and not the card that we needed. Phew!)

      let numerator =
        nx(manaObj.C - manaUsed, numColorless) *
        nx(totalUndesirable, undesirable);

      for (let i = 0; i < keys.length; i++) {
        numerator = numerator * nx(manaObj[keys[i]], option[i]);
      }
      if (undesirable > totalUndesirable) {
        return 1;

        // If I'm trying to draw more undesirable cards than I have available, then that means that I can't help but draw the card I want. The probability
        // is 1.
      } else {
        probability += numerator / denominator;
        if (numerator / denominator < 0) {
          console.log(
            "Probability",
            probability,
            "Cards in hand",
            cardsInHand,
            "deck length",
            deckLength,
            "colorless",
            colorless,
            "option",
            option,
            "mana Obj",
            manaObj,
            "Colorless Count",
            numColorless,
            "Undesirable",
            undesirable
          );
        }
      }
    }
  }
  // console.log(probability);
  if (probability > 1) {
    return 1;
  } else {
    // console.log("Returning something other than 1");
    return probability;
  }
};

module.exports = colorlessAndFailure;
