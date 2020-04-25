const fs = require('fs');
function getJsonFromFile(filename){
  
    let rawdata = fs.readFileSync(filename);
    let books = JSON.parse(rawdata);
    return books;
    
}
exports.getJsonFromFile = getJsonFromFile;