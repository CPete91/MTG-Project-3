const path = require("path");
const router = require("express").Router();
const userController = require("./../controllers/userController")


router.route("/login").post(userController.checkLogIn)

router.route('/signup').post(userController.newUser)

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;