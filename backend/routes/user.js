const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


const router = express.Router();

router.post('/api/user/signup', (req, res, next) =>{
    bcrypt.hash(req.body.password, 10)
    .then( hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        })
        
        user.save()
        .then( result => {
            res.status(201).json({
                message: 'user created',
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })

    })
})


router.post('/api/user/login', (req, res, next) => {
    var fetchedUser;
    User.findOne({ email: req.body.email})
    .then( user => {
        console.log(user)
        fetchedUser = user;
        if(!user) {
            return res.status(401).json({
                message: 'Auth failed'
            })
        }
        return bcrypt.compare(req.body.password, user.password)
    }).then(result => {
        if(!result) {
            return res.status(401).json({
                message: 'Auth failed'
            })
        }

        const token = jwt.sign({
            email: fetchedUser.email,
            userId: fetchedUser._id
        }, '2efbnm3598fn13fb0824f10ig2',
        {expiresIn: "1h"})
        return res.status(200).json({
            token: token
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
})


module.exports = router;