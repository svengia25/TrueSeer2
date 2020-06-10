const mongoose = require("mongoose");

var matchSchema = mongoose.Schema({
    matchId: {type: String},
    date: {type: String},
    team1: {type: Object},
    team2: {type: Object},
    format: {type: String, required: false},
    event: {type: Object, required: false},
    map: {type: Array, required: false},
    stars: {type: String, required: false},
    status: {type: String, required: false},
    result: {type: String, required: false}
})

module.exports = mongoose.model('match', matchSchema)