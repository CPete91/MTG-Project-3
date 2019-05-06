// OptionProb is a helper function (for a helper function) that takes in one option to pay for a card and the mana object.
// It then calculates the probability that a user will be able to pay for the card by the earliest theoretical time you could play it.
// IE, if a card has a CMC of 3, it will calculate the probability that you can play it on turn 3.

// Favorable outcomes:

// 1 drawing this card (1/deckLength)
// 2: drawing any of the mana that I need (sum total of appropriate mana types still needed/total number of cards that are not that mana type)

export default {
  optionProb: (paymentOption,
  manaObj,
  deckLength,
  cmc => {
    let probability = 0;
    for (let i = 0; i < 7 + cmc; i++) {
      let favorable = 0;
      let unfavorableCards = deckLength - 1;
      const keys = Object.keys(manaObj);
      keys.forEach(key => {
        unfavorableCards = manaObj[key] - paymentOption[key];
      });
      let cardsDrawn = 0;
    }
  })
};
