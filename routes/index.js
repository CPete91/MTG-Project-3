const path = require("path");
const router = require("express").Router();
const userController = require("./../controllers/userController");
const cardController = require("./../controllers/cardController");
const deckController = require("./../controllers/deckController");

router.route("/login").post(userController.checkLogIn);

router.route("/signup").post(userController.newUser);

router.route("/api/cards").get(cardController.findAll);
router.route("/api/cards/:id").get(cardController.findId);


router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
