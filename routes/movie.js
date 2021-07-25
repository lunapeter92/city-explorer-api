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
    let movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${location}`;

    try{
        let result = await axios.get(movieUrl);
        console.log(result.data.results)
        let newArr = result.data.results.map(item => {
            return new Movie(item);
        })
        res.status(200).json(newArr);
        
        // console.log(result.data.results.data.overview)
    }catch(error){
        console.error(error);
    }
}


class Movie {
    constructor(obj){
        this.title = obj.title;
        this.overview = obj.overview;
    }
}

module.exports = getMovie;