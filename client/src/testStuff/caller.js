let deck = require("./deck");
const manaCalculator = require("./../utils/manaCalculator");
const stats = require("./../utils/stats");
const deckProbability = require("./../utils/deckProbability");

for (let i = 0; i < deck.length; i++) {
  deck[i] = manaCalculator(deck[i]);
  // Call manaCalculator on cards as we add them to the deck.
}

// Call stats on the deck to get the probability of playing any given card in the deck.
let newDeck = stats(deck);

// Deck Probability gives us the overall breakdown of likelihood of a play on any given turn.
console.log(deckProbability(newDeck));
