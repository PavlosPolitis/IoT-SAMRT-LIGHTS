const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CORS = require('CORS');
require('dotenv/config');

app.use(bodyParser.json());
app.use(CORS());

//Routes
app.get('/', (req, res) => {
    res.send('We are on Home');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    () => console.log('connected to DB!')
);

//Listen
app.listen(3000);

//Import Routes
const postsRoutel = require('./routes/lights');
const postsRoutem = require('./routes/motions');
const postsRoutew = require('./routes/weather');
const postsRoutewobs = require('./routes/weatherobs');
const { $where } = require('./models/Lights');

app.use('/lights', postsRoutel); //middleware
app.use('/motions', postsRoutem);
app.use('/weather', postsRoutew);
app.use('/weatherobs', postsRoutewobs); 