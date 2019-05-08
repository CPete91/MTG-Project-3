import axios from "axios";

export default {
  // gets all cards
  getCards: () => {
    return axios.get("http://localhost:3001/api/cards", { crossdomain: true });
  },
  signUp: user => {
    console.log(user);
    return axios.post("http://localhost:3001/signup", user, {
      crossdomain: true
    });
  },
  login: user => {
    return axios.post("http://localhost:3001/login", user, {
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
