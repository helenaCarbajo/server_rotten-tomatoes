/**
 * Created by helena on 12/11/16.
 */
"use strict"

var xml2js = require("xml2js");

module.exports = {
    parseXML: parseXML
}

function parseXML(xmldata){
    return new Promise(function(response,reject){
        xml2js.parseString(xmldata, function(error,result){
            if(error){
                return reject(error);
            }
            return response(result);
        });
    });

}
