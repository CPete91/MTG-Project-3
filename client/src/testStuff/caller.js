let deck = require("./deck");
const manaCalculator = require("./../utils/manaCalculator");
const stats = require("./../utils/stats");
// const deckProbability = import("./../utils/deckProbability");

for (let i = 0; i < deck.length; i++) {
  deck[i] = manaCalculator(deck[i]);
}

let newDeck = stats(deck);
for (let i = 0; i < newDeck.length; i++) {
  console.log(newDeck[i].name, newDeck[i].probability, newDeck[i].options);
}
