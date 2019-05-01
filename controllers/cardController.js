const db = require("../models");



module.exports = {
    findAll: function (req, res) {
        db.Card
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

}  
