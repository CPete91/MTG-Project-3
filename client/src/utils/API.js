import axios from "axios";

export default {
  // gets all cards
  getCards: () => {
    return axios.get("/api/cards", { crossdomain: true });
  }
};

// getCards: function() {
//   return axios.get("api/cards");
// }
