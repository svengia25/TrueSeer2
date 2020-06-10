const mongoose = require("mongoose");

var betSchema = mongoose.Schema({
    userId: {type: String},
    matchId: {type: String},
    date: { type: Date, default: Date.now },
    team1: {type: String},
    team2: {type: String},
    prop: {type: String},
    amount: {type: Number},
    odds: {type: Number},
    result: {type: String}
})

module.exports = mongoose.model('Bet', betSchema)