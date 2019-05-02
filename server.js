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

const cardSchema = new Schema({}, { strict: false });
//const cardData = require("./mockdata/mtgstandard.json");

const Card = require("./models/card");


const initCards = () => {
  Card.deleteMany({});

  newData = axios.get("https://api.scryfall.com/cards/search?unique=cards&q=f:standard");

  Card.insertMany(newData.data);


  if (newData.has_more) {
    createCards(axios.get(newData.next_page));
  }
}

const createCards = (cardData) => {


  Card.insertMany(cardData.data);

  if (cardData.has_more) {
    createCards(axios.get(cardData.next_page));
  }


}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MTG").then(initCards());






// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
