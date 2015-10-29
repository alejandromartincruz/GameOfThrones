var fs = require('fs');
var fileActions = require('./fileactions')
fs.readFile("./file.json", 'utf8', fileActions);
