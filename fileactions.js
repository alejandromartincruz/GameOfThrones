var split = require('./split');
var printEpisode = require('./printEpisode');
var stars = require('./stars');

var colors = require('colors/safe');

function fileactions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);
    //console.log(episodes[0])
    //console.log(`jrerbhhbfej ${episodes[0].title}`)

    var newDescription = split(episodes[0].description);
    var ratingStars = stars(episodes[0].rating)
  	printEpisode(episodes[0], newDescription, ratingStars);  

}

module.exports = fileactions;