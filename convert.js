var casrai2Orcid = require('./casrai2Orcid.js');
var fs = require('fs');

var fileToRead = process.argv[2];
var fileToWrite = process.argv[3];

var obj = JSON.parse(fs.readFileSync(fileToRead, 'utf8'));
var output = casrai2Orcid.convertCasraiAward2Orcid(obj);
console.log(output);

fs.writeFile(fileToWrite, JSON.stringify(output, null, 4), function (err,data) {
  if (err) {
    return console.log(err);
  }
});
