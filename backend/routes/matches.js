const express = require('express');

const Match = require('../models/match');


const router = express.Router();


//get all upcoming/live matches within 24 hours
router.get('/api/matches', (req, res, next) => {

    Match.find({result: 'unfinished'}).then((docs) => {
        const newDocs = docs.filter(obj => obj.date < (Date.now()+50000000) && obj.date > Date.now() || obj.date == null)
        res.status(201).json(newDocs)
    })

})

module.exports = router;