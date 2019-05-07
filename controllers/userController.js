const db = require("../models");


const bcrypt = require('bcrypt');
const saltRounds = 10;

const hasher = (password, username, res) => {
  console.log("hasher")
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {

      console.log(hash);
      db.User.create({ userName: username, password: hash }).then(data => res.json({ uid: data._id }));

      //console.log(hash[0]);

    });
  });
}


module.exports = {
  checkLogIn: function (req, res) {
    console.log("here");
    db.User.find({ userName: req.body.userName }).then(data => {
      console.log(data);
      if (data.length) {
        bcrypt.compare(req.body.password, data[0].password, function (err, response) {
          console.log("response");
          if (response) {
            console.log("ur in");
            res.json({ uid: data[0]._id });


          } else {
            res.json({ uid: false, err: "Username or password is incorrect." });

          }
          // res == true
        });

      } else {
        res.json({ uid: false, err: "Username or password is incorrect." });
      }

    })


  },

  newUser: function (req, res) {
    console.log("wowee: " + req.body.userName);

    db.User.find(
      { userName: req.body.userName },
      function (err, data) {
        if (err) throw err;
        console.log("data", data);
        if (data.length && data[0].email == req.body.email) {
          res.json({ uid: false, err: "That email is already in use." });
        } else if (data.length && data[0].userName == req.body.userName) {
          res.json({
            uid: false,
            err:
              "That username has already been taken. Please select a new username."
          });
        } else {
          hasher(req.body.password, req.body.userName, res);

          //db.User.create({ userName: req.body.userName, password: hash }).then(data => res.json({ uid: data._id }));


        }
      }
    );
  },

  userHash: function (req, res) {
    db.User.find({ userName: req.params.user }, function (err, data) {
      if (err) throw err;

      res.json(data);

    });

  }
};
