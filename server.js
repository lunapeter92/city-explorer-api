'use strict'

const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const axios = require('axios');

dotenv.config();

const app = express(); 
app.use(cors())
app.use(express.json())

//function to get weather from weather API
async function getWeather(req,res){
    let lon = req.query.lon;
    let lat = req.query.lat;
    let query = req.query.searchQuery;
    let key = process.env.WEATHER_KEY;
    try{
        let weatherUrl = `http://api.weatherbit.io/v2.0/current?key=${key}&lon=${lon}&lat=${lat}`
        let response = await axios.get(weatherUrl)
        console.log(response)
        res.json(response.data)
    }catch(error){
        console.error(error)
    }
    
}

async function getMovie(req, res){
    let movie = req.query.movie;
    let location = req.query.searchQuery
    let key = process.env.MOVIE_API_KEY;
    let movieUrl = `https://api.themoviedb.org/3/movie/550?api_key=${key}`
}


//Routes
app.get('/weather',getWeather);
app.get('/movie', getMovie);

class Forecast {
    constructor(obj){
        this.date = obj.datetime;
        this.description = obj.description;
    }
}
//Route to handle user going to unlisted route 
app.get('*', (req, res) => {
    res.status(404).send('Page not found')
})


//Set port to listen on
app.listen(process.env.PORT, () => {
    console.log('Server has now started');
})