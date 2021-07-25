'use strict'

const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const axios = require('axios');

dotenv.config();

const app = express(); 
app.use(cors())
app.use(express.json())

const getWeather = require('./routes/weather.js')
const getMovie = require('./routes/movie.js')


//Routes
app.get('/weather',getWeather);
app.get('/movie', getMovie);


//Route to handle user going to unlisted route 
app.get('*', (req, res) => {
    res.status(404).send('Page not found')
})


//Set port to listen on
app.listen(process.env.PORT, () => {
    console.log('Server has now started');
})