const mongoose = require("mongoose");


var betSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    matchId: {type: String, default: ""},
    date: { type: Date, default: Date.now },
    team1: {type: String},
    team2: {type: String},
    prop: {type: String, default: ""},
    amount: {type: Number, default: ""},
    odds: {type: Number, default: ""},
    result: {type: String, default: ""}
})

module.exports = mongoose.model('Bet', betSchema)