const express = require("express");

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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MTG");

const Schema = mongoose.Schema;

const cardSchema = new Schema({}, { strict: false });
const cardData = require("./mockdata/mtgstandard.json");

const Card = mongoose.model('Card', cardSchema);




Card.find().remove();
for (var i = 0; i < cardData.length; i++) {
  new Card(cardData[i]).save();
}



// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
