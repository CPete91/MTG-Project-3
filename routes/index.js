const path = require("path");
const router = require("express").Router();
const userController = require("./../controllers/userController");
const cardController = require("./../controllers/cardController");
const deckController = require("./../controllers/deckController");

router.route("/login").post(userController.checkLogIn);

router.route("/signup").post(userController.newUser);


router.route("/api/cards").get(cardController.findAll);
router.route("/api/cards/:id").get(cardController.findId);
router.route("/api/decks/").get(deckController.findAll);
router.route("/api/decks/:id").get(deckController.findByUid);
router.route("/api/decks/:search").get(deckController.findByTags);
router.route("/api/decks/").post(deckController.createDeck);



router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
