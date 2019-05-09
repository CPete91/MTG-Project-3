const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.CardDB.find({})
      .then(dbModel => {
        console.log("got this back from DB!!!", dbModel[0]);
        var data = {
          data: dbModel[0]
        };
        // res.send("THIS IS TOM TEST");
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findId: function(req, res) {
    db.CardDB.find({ tcgplayer_id: parseInt(req.params.id) })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
