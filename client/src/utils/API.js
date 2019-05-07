import axios from "axios";

export default {
  // gets all cards
  getCards: () => {
    return axios.get("http://localhost:3001/api/cards", { crossdomain: true });
  },

  // saves deckArray to database
  submitDeck: deckData => {
    return axios.post("/api/decks", deckData);
  }
};

// getCards: function() {
//   return axios.get("api/cards");
// }
