const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const weatherData = require('./data/weather.json');

dotenv.config();

const app = express(); 
app.use(cors())


app.get('/weather', (req, res) =>{
    let lon = req.query.lon;
    let lat = req.query.lat;
    let query = req.query.searchQuery;
    

    let newArr = weatherData.map(item => {
        if(item.lat === lat || item.lon === lon || item.city_name === query){
            return item;
        }else{
            res.send('City could not be found')
        }
    })
    
    res.json(newArr);
    
})


app.listen(process.env.PORT, () => {
    console.log('Server has now started');
})