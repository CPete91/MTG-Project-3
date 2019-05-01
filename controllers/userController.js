const db = require("../models");

module.exports = {
    checkLogIn: function (req, res) {
        db.User.find({ req }).then(data => console.log(data))
    },
    newUser: function (req, res) {
        db.User.create({ req }.then(data => console.log(data)))
    }
}