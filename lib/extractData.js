/**
 * Created by helena on 13/11/16.
 */
"use strict"

module.exports = {
    getXML: getXML,
    getJS: getJS
}

function getXML(data) {
    var rating = [];
    data.forEach(function(element){
        rating.push(parseInt(element.rating));
    });
    //console.log(rating);
    return rating;
}

function getJS(data) {
    var jsdata = JSON.parse(data);
    var rating = [];
    jsdata.forEach(function(element){
        rating.push(element.rating);
    });
    //console.log(rating);
    return rating;
};
