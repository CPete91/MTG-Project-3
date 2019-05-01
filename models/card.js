const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const cardSchema = new Schema({}, { strict: false });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;