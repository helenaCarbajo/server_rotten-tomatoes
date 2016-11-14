/**
 * Created by helena on 12/11/16.
 */

"use strict"

module.exports = {
    calculateAverage: calculateAverage
}

function calculateAverage(data){
   var average = 0;
    data.forEach(function(element){
        average += element;
    });
    average = average/data.length;


    return average;
}
