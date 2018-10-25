const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const port = 3000;
const MAPQUEST_KEY = 'sHglX8bRIAV5IaKx1PhIZvot6Wrsy56M';
const MAPQUEST_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=' + MAPQUEST_KEY + '&location=';
const SUN_URI = 'https://api.sunrise-sunset.org/json';

app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static('public'));

// noinspection JSAnnotator
app.get('/cities', async (req, res) => {
    try {
        const results = await fetch(MAPQUEST_URL + req.query.city + ',' + req.query.code);
        console.log(results);
    }catch (e) {
        res.sendStatus(500);
    }
});

app.listen(port);