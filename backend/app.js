const express = require('express');
const parse = require('body-parser');
const mongoose = require('mongoose');

const { HLTV } = require('hltv');

const app = express();

mongoose.connect('mongodb+srv://akhayat:3dowjzLYvq2mAzZr@ngapp-dxob4.mongodb.net/test?retryWrites=true&w=majority',  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(() => {

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

app.use(matchRoutes)


module.exports = app;