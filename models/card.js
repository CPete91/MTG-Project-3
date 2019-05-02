const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name: {
        type: String,
        unique: true,
        dropDups: true
    }
}, { strict: false });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;