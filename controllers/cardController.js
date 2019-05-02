const db = require("../models");



module.exports = {
    findAll: function (req, res) {
        db.CardDB
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findId: function (req, res) {
        db.CardDB
            .find({ tcgplayer_id: parseInt(req.params.id) })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

}  
