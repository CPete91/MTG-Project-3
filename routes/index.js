const express = require("express");
const app = express()
const router = require("express").Router();
const deckController = require("../controllers/deckController.js");
const cardController = require("../controllers/cardController.js");


app.get("/", function (req, res) {
    res.send(JSON.stringify({ res: "Hello World" }));
});


//retrieves all decks in database
router.route("/api/decks")
    .get(deckController.findAll);

//retrieves all decks of a particular user
router.route("/api/decks/:id")
    .get(deckController.findByUid);


router.route("/api/cards")
    .get(cardController.findAll);



module.exports = router;
