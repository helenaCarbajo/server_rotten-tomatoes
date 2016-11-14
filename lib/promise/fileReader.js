/**
 * Created by helena on 12/11/16.
 */
"use strict"

var fsp = require("fs-promise");

module.exports = {
    readFile: readFile
}


function readFile(path){
    return fsp.readFile(path, {encoding:'utf8'});
}
