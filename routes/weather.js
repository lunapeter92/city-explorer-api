'use strict'

const axios = require('axios');





async function getWeather(req,res){
    let lon = req.query.lon;
    let lat = req.query.lat;
    let query = req.query.searchQuery;
    let key = process.env.WEATHER_KEY;
    try{
        let weatherUrl = `http://api.weatherbit.io/v2.0/current?key=${key}&lon=${lon}&lat=${lat}`
        let response = await axios.get(weatherUrl)
        
        res.json(`Date Time: ${response.data.data[0].datetime}, Description:  ${response.data.data[0].weather.description}`)
        // res.json(response.data)
    }catch(error){
        console.error(error)
    }
    
}

class Forecast {
    constructor(datetime, desc){
        this.date = datetime;
        this.description = desc;
    }
}

module.exports = getWeather;