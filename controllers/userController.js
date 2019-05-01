const db = require("../models");

module.exports = {
  checkLogIn: function(req, res) {
    db.User.find(req.body).then(data => res.json({ uid: data._id }));
  },
  newUser: function(req, res) {
    db.User.create(req.body).then(data => res.json({ uid: data._id }));
  }
};
