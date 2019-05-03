const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        db.Deck
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByUid: function (req, res) {
        db.Deck
            .find({ uid: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createDeck: function (req, res) {
        db.Deck
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));


    },
    findByTags: function (req, res) {
        db.Deck
            .find({ tags: { $all: [req.params.search] } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));



    }
}  