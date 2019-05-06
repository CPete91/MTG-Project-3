const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

const Schema = mongoose.Schema;

//const cardData = require("./mockdata/mtgstandard.json");

const db = require("./models");

const initCards = () => {
  axios
    .get("https://api.scryfall.com/cards/search?unique=cards&q=f:standard")
    .then(function(response) {
      createCards(response.data);
    });

  // db.CardDB.insertMany(newData.data);

  //if (newData.has_more) {
  //createCards(axios.get(newData.next_page));
  //}
  console.log("done");
};

const createCards = cardData => {
  // console.log(cardData);

  db.CardDB.insertMany(cardData.data);

  if (cardData.has_more) {
    axios.get(cardData.next_page).then(function(response) {
      createCards(response.data);
    });
  }
  console.log("done");
};

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/MTG")
  .then(initCards());

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
