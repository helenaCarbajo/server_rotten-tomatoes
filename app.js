"use strict"

var fileReader = require("./lib/promise/fileReader");
var xmlParser = require("./lib/promise/xmlParser");
var getAverage = require("./lib/promise/getAverage");
var extractData = require("./lib/extractData");
var co = require("co");

var imdbMovies;
var rottenMovies;
var ratingRotten;
var ratingImdb;

co(function* () {

        var data = yield fileReader.readFile('./movies.xml');
        rottenMovies = yield xmlParser.parseXML(data);
        rottenMovies = rottenMovies.movies.movie;
        ratingRotten = getAverage.calculateAverage(extractData.getXML(rottenMovies));
        imdbMovies = yield fileReader.readFile('./movies.json');
        return ratingImdb = getAverage.calculateAverage(extractData.getJS(imdbMovies));
    }).then (function(data){
        console.log("Average rating IMDB: "+ ratingRotten);
        console.log("Average rating Rotten Tomatoes: "+ ratingImdb+ " %");
    }).catch(function(error){
        console.log(error);

    });

/*
fileReader.readFile('./movies.xml').then(function(data) {
    rottenMovies = data;
    return xmlParser.parseXML(data);
}).then(function(jsData){
    rottenMovies = jsData.movies.movie;
    ratingRotten = getAverage.calculateAverage(extractData.getXML(rottenMovies));
    console.log("Average rating IMDB: "+ ratingRotten);
}).catch(function(error){
     console.log(error);
});

fileReader.readFile('./movies.json').then(function(data) {
    imdbMovies = data;
    ratingImdb = getAverage.calculateAverage(extractData.getJS(imdbMovies));
    console.log("Average rating Rotten Tomatoes: "+ ratingImdb+ " %");
}).catch(function(error){
    console.log(error);
});
*/

