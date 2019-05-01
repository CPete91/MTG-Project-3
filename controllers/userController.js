const db = require("../models");

module.exports = {
  checkLogIn: function(req, res) {
    db.User.find(req.body).then(data => {
      if (data.length) {
        res.json({ uid: data[0]._id });
      } else {
        res.json({ uid: false, err: "Username or password is incorrect." });
      }
    });
  },
  newUser: function(req, res) {
    db.User.find({ userName: req.body.userName }).then(data => {
      if (data.length) {
        res.json({
          uid: false,
          err:
            "That username has already been taken. Please select a new username."
        });
      } else {
        db.User.create(req.body).then(data => res.json({ uid: data._id }));
      }
    });
  }
};
