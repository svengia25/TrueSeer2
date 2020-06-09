const mongoose = require("mongoose");

var matchSchema = mongoose.Schema({
    id: {type: String},
    team1: {type: Object},
    team2: {type: Object},
    event: {type: Object},
    format: {type: String},
    maps: {type: Array},
    stars: {type: String},
    live: {type: String}
})

module.exports = mongoose.model('liveMatch', liveMatchSchema)