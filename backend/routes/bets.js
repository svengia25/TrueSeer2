const express = require('express');

const Bet = require('../models/bet');

const checkAuth = require('../middleware/check-auth')



const router = express.Router();

router.post('/api/bet', checkAuth, (req, res, next) => {
    let q = req.body
    const bet = new Bet({
        userId: req.userData.userId,
        matchId: q.matchId,
        team1: q.team1,
        team2: q.team2,
        prop: q.prop,
        amount: q.amount,
        odds: q.odds,
        result: q.result
    })
    console.log(bet)
    bet.save()
    .then( result => {
        res.status(201).json({
            message: 'bet created',
            result: result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})

router.get('/api/bets', checkAuth, (req, res, next) => {
    Bet.find({ userId: req.userData.userId})
    .then( result => {
        res.status(201).json(result)
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

router.delete("api/bets/:id", checkAuth, (req, res, next) => {
    Bet.deleteOne({_id: req.params.id, userId: req.userData.UserId})
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
