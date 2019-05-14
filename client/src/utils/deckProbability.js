// This function takes in an entire deck of cards that have already been analyzed for their probability of being playable on turns 1-10.
// It returns an array of probabilities that ANY card can be played on turns 1-10.

const deckProbability = function(deck) {
  let totalProbability = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 10; i++) {
    deck.forEach(card => {
      totalProbability[i] += card.probability[i];
    });
  }

  totalProbability = totalProbability.map(element => element / deck.length);
  // while(totalProbability.indexOf(1) === -1 && totalProbability[9]>0){
  //   for(let i = 0; i<totalProbability.length;i++){
  //     if(totalProbability[i]>0){
  //     totalProbability[i] = totalProbability[i] * 10 + i/(totalProbability.length-i);
  //     }
  //     if (totalProbability[i]>1){
  //       totalProbability[i] = 1
  //     }
  //   }
  // }

  for (let i = 0; i < totalProbability.length; i++) {
    if (totalProbability[i] > 1) {
      totalProbability[i] = 1;
    }
    totalProbability[i] = totalProbability[i] * 100;
  }

  return totalProbability;
};

module.exports = deckProbability;
