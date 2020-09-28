const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.get('/api/customers', (req, res) => {

    fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/huhi?api_key=RGAPI-031ffc06-01a2-4696-9e40-235d76f08cc1')
    .then(res => res.json())
    .then(result => res.json(result));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))