var split = require('./split');
var printEpisode = require('./printEpisode');
var stars = require('./stars');
var sortEpisodes = require('./sortEpisodes');
var filterEpisodes = require('./filterEpisodes');

var colors = require('colors/safe');

function fileactions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);

    episodes = sortEpisodes(episodes);
    episodes = filterEpisodes(episodes); //episodes filtered by rating < 8.5
    
  	episodes.forEach(function(episode, index){
  		var newDescription = split(episodes[index].description);
    	var ratingStars = stars(episodes[index].rating)
  		printEpisode(episodes[index], newDescription, ratingStars);
  	})  

}

module.exports = fileactions;