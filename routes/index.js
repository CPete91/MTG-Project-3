const express = require("express");
const app = express()

app.get("/", function (req, res) {
    res.send(JSON.stringify({ res: "Hello World" }));
});


router.route("/api/decks")
    .get(deckController.findAll);
