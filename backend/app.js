const express = require('express');
const parse = require('body-parser');
const mongoose = require('mongoose');

const matchRoutes = require('./routes/matches')
const userRoutes = require('./routes/user')

const Match = require('./models/match');
const { HLTV } = require('hltv');

const app = express();

mongoose.connect('mongodb+srv://akhayat:3dowjzLYvq2mAzZr@ngapp-dxob4.mongodb.net/test?retryWrites=true&w=majority',  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(() => {

        setInterval(function() {
            updateMatches
            updateResults
        }, 2500000)

    })
    .catch((error) => {
        console.log(error);
    });


app.use(parse.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    next();
});


const updateMatches = HLTV.getMatches().then((res) =>{
                
    for(i=0; i<res.length; i++){
        var obj = res[i];

        if(obj.team1 == undefined || obj.team2 == undefined){}
        else {
            const match = {
                matchId: obj.id,
                date: obj.date,
                team1: obj.team1,
                team2: obj.team2,
                format: obj.format,
                event: obj.event,
                map: obj.live? obj.maps : obj.map,
                stars: obj.stars,
                live: obj.live,
                result: 'unfinished'
            }
            Match.updateOne({matchId: match.matchId}, match, {upsert: true}).then((res)=>{
            })
        }
    }
})

const updateResults = HLTV.getResults({pages: 1}).then((res)=> {
    for(i=0; i<res.length; i++){
        var obj = res[i];
        Match.updateOne({matchId: obj.id}, {live: 'finished', result: obj.result}).then((res) =>{
        })
    }
})


app.use(matchRoutes)

app.use(userRoutes)

module.exports = app;