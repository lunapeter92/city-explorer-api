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
        let newArr = response.data.data.map(item =>{
            return new Forecast(item)
        })
        res.status(200).json(newArr)
        
        
    }catch(error){
        console.error(error)
    }
    
}

class Forecast {
    constructor(obj){
        this.date = obj.datetime;
        this.description = obj.weather.description;
    }
}

module.exports = getWeather;