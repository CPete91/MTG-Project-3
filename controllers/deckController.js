const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        db.Deck
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByUid: function (req, res) {
        db.Deck
            .find({ uid: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
}  