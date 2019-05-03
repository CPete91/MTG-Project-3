import axios from "axios";

export default {
  // gets all cards
  getCards: () => {
    axios.get("http://localhost:3001/api/cards").then(data => {
      console.log("we got this data back!!!", data);
      return data;
    });
  }
};

// getCards: function() {
//   return axios.get("api/cards");
// }
