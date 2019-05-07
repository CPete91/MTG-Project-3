// OptionProb is a helper function (for a helper function) that takes in one option to pay for a card and the mana object.
// It then calculates the probability that a user will be able to pay for the card by the earliest theoretical time you could play it.
// IE, if a card has a CMC of 3, it will calculate the probability that you can play it on turn 3.

// Favorable outcomes:

// 1 drawing this card (1/deckLength)
// 2: drawing any of the mana that I need (sum total of appropriate mana types still needed/total number of cards that are not that mana type)

optionProb = function(paymentOption, manaObj, deckLength, cmc) {
  console.log("entered options prob");
  const keys = Object.keys(manaObj);
  let unfavorableCards = deckLength - 1;
  keys.forEach(key => {
    if (paymentOption[key > 0]) {
      favorable[key] = manaObj[key];
      unfavorableCards = unfavorableCards - manaObj[key];
      // Set up a favorable object. This has attributes of different mana type that are required to play a card.
    }
  });
  let probabilityArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // Our chart will take in an array of probabilities. We populate this with the probability of each respective play.
  let probability = 0;
  for (let i = 0; i <= 10 - cmc; i++) {
    let currentUnfavorableCards = unfavorableCards;
    let favorable = {};
    let cardsDrawn = 0;
    let thisProb = 0;
    for (unfavorable = 0; unfavorable < i; unfavorable++) {
      cardsDrawn++;
      if (unfavorable === 0) {
        thisProb = unfavorableCards / deckLength;
        cardsDrawn++;
      } else {
        thisProb =
          ((currentUnfavorableCards - cardsDrawn) / (deckLength - cardsDrawn)) *
          thisProb;
      }
    }
    // Calculate the odds of first drawing unfavorable cards before drawing favorable cards.
    let keys = Object.keys(favorable);
    let manaDrawn = 0;
    keys.forEach(key => {
      for (let i = 0; i < favorable[key]; i++) {
        if (thisProb > 0) {
          thisProb =
            (thisProb * (favorable[key] - i)) / (deckLength - cardsDrawn);
          cardsDrawn++;
          manaDrawn++;
        } else if (key === "C") {
          thisProb =
            (thisProb * (favorable[key] - manaDrawn)) /
            (deckLength - cardsDrawn);
          cardsDrawn++;
          manaDrawn++;
        } else {
          thisProb = favorable[key] / deckLength;
          cardsDrawn++;
          manaDrawn++;
        }
      }
      // Calculate the probability of drawing the cards we want. Assume that we draw them all in a clump,
      // because it turns out that I took AP statistics a decade ago, and I forgot how to calculate the odds
      // that a subset will show up in a randomly selected set.
    });
    probability += thisProb;
    probabilityArray[cmc + i] = probability;
    // Add in the probability of each possible situation.
  }
  return probabilityArray;
};

module.exports = optionProb;
