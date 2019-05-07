import axios from "axios";

export default {
  // gets all cards
  getCards: () => {
    return axios.get("http://localhost:3001/api/cards", { crossdomain: true });
  },
  signUp: (user) => {
    console.log(user);
    return axios.post("http://localhost:3001/signup", user, { crossdomain: true });
  },
  login: (user) => {
    return axios.post("http://localhost:3001/login", user, { crossdomain: true });
  },
  getUserHash: (userName) => {
    return axios.get("http://localhost:3001/userhash/" + userName);
  }


};

// getCards: function() {
//   return axios.get("api/cards");
// }
