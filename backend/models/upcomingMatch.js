const mongoose = require("mongoose");

var matchSchema = mongoose.Schema({
    id: {type: String},
    date: {type: Number},
    team1: {type: Object},
    team2: {type: Object},
    format: {type: String},
    event: {type: Object},
    map: {type: Array},
    stars: {type: String},
    live: {type: String}
})

module.exports = mongoose.model('upcomingMatch', upcomingmatchSchema)