// This function takes in an entire deck of cards that have already been analyzed for their probability of being playable on turns 1-10.
// It returns an array of probabilities that ANY card can be played on turns 1-10.

export default {
  deckProbability: deck => {
    let totalProbability = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 10; i++) {
      deck.forEach(card => {
        totalProbability[i] += card.probability[i];
      });
    }

    totalProbability = totalProbability.map(element => element / deck.length);
    return totalProbability;
  }
};
