const express = require('express');

const Bet = require('../models/bet');

const checkAuth = require('../middleware/check-auth')



const router = express.Router();

router.post('/api/bet', (req, res, next) => {
    let q = req.body
    console.log(req.body)
    const bet = new Bet({
        userId: '5ee2b909ca9e910fd897770e',
        matchId: q.matchId,
        team1: q.team1,
        team2: q.team2,
        prop: q.prop,
        amount: q.amount,
        odds: q.odds,
        result: q.result
    })

    bet.save()
    .then( result => {
        res.status(201).json({
            message: 'bet created',
            result: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
})

router.get('/api/bets', (req, res, next) => {
    Bet.find({ userId: req.userData.userId})
    .then( result => {
        res.status(201).json({
            result: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
})

router.put("/api/bets/:id", (req, res, next) => {
    const bet = Bet({

    })
})

router.delete("api/bets/:id", (req, res, next) => {
    Bet.deleteOne({_id: req.params.id})
    .then( result => {
        res.status(201).json({
            result: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
})



module.exports = router;
