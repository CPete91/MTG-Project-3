const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const deckSchema = new Schema({

    name: {
        type: String
    },

    cards: {
        type: Array

    },

    description: {
        type: String

    },
    tags: {
        type: Array
    },

    uid: {
        type: Schema.Types.ObjectId

    }

});

const Deck = mongoose.model("Deck", deckSchema);

module.exports = Deck;
