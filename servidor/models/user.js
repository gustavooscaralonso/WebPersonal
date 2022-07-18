const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    rol: String,
    active: Boolean,
    avatar: String,
});

module.exports = mongoose.model("User", UserSchema);