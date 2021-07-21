'use strict'

const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const weatherData = require('./data/weather.json');

dotenv.config();

const app = express(); 
app.use(cors())
app.use(express.json())






app.get('/weather', (req, res) =>{
    let lon = req.query.lon;
    let lat = req.query.lat;
    let query = req.query.searchQuery;
    
    const newArr = weatherData.find(item => {
        return item.city_name === query;
    })
    

    
    // console.log(newArr)
    
    res.json(newArr);
    
    
})

class Forecast {
    constructor(obj){
        this.date = obj.datetime;
        this.description = obj.description;
    }
}

app.get('*', (req, res) => {
    res.status(404).send('Page not found')
})

app.listen(process.env.PORT, () => {
    console.log('Server has now started');
})