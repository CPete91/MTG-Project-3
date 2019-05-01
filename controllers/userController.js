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
  // newUser: function(req, res) {
  //   db.User.find(
  //     { $or: [{ userName: req.body.userName }, { email: req.body.email }] },
  //     function(data) {
  //       console.log("data", data);
  //       if (data && data.userName === req.body.userName) {
  //         res.json({
  //           uid: false,
  //           err:
  //             "That username has already been taken. Please select a new username."
  //         });
  //       } else if (data && data.email === req.body.email) {
  //         res.json({ uid: false, err: "That email is already in use." });
  //       } else {
  //         db.User.create(req.body).then(data => res.json({ uid: data._id }));
  //       }
  //     }
  //   );
  // },

  newUser: function(req, res) {
    db.User.find(
      { $or: [{ userName: req.body.userName }, { email: req.body.email }] },
      function(err, data) {
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
          db.User.create(req.body).then(data => res.json({ uid: data._id }));
        }
      }
    );
  }
};
