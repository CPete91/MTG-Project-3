import axios from "axios";

export default {
  // gets all cards
  getCards: () => {
    return axios.get("http://localhost:3001/api/cards");

  }
};

// getCards: function() {
//   return axios.get("api/cards");
// }
