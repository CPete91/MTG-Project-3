import axios from "axios";

export default {
  // gets all cards
  getCards: function() {
    return axios.get("/api/cards");
  }
};
