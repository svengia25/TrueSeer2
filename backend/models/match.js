const mongoose = require('mongoose');

var matchSchema = mongoose.Schema({
    matchId: {type: String, unique: true},
    date: {type: String, required: false, default: "Live!"},
    team1: {type: Object},
    team2: {type: Object},
    format: {type: String, required: false},
    event: {type: Object, required: false},
    map: {type: Array, required: false},
    stars: {type: String, required: false},
    status: {type: String},
    live: {type: String},
    result: {type: String, required: false, default: 'unfinished'}
})

module.exports = mongoose.model('Match', matchSchema)