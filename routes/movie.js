'use strict';

const axios = require('axios');
const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config();



async function getMovie(req, res){
    let movie = req.query.movie;
    let location = req.query.searchQuery
    let key = process.env.MOVIE_API_KEY;
    let movieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&region=${location}`;

    try{
        let result = await axios.get(movieUrl);
        console.log(result.data.results)
    }catch{
        console.error(error);
    }
}

module.exports = getMovie;