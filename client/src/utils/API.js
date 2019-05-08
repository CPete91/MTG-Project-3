import axios from "axios";

export default {
  // gets all cards
  getCards: () => {
    return axios.get("/api/cards", { crossdomain: true });
  },
  signUp: user => {
    console.log(user);
    return axios.post("/signup", user, {
      crossdomain: true
    });
  },
  login: user => {
    return axios.post("/login", user, {
      crossdomain: true
    });
  },

  // saves deckArray to database
  submitDeck: deckData => {
    return axios.post("/api/decks", deckData);
  },
  getUserDecks: uid => {
    return axios.get("/api/decks/" + uid, { crossdomain: true });
  }
};

// getCards: function() {
//   return axios.get("api/cards");
// }
