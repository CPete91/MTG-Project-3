import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "localhost:3000/",
    clientID: "2vW0VqUkTfgH6Isr3vwYcqNNzh5Cyjkt",
    redirectUri: "http://localhost:3000/",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
