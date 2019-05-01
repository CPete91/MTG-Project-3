const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    decks: { type: Array, default: [] },
    email: { type: String }
});
// I'm just restarting the server

const User = mongoose.model("User", userSchema);

module.exports = User;
