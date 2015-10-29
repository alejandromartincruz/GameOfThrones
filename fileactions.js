var split = require('./split');
var printEpisode = require('./printEpisode');
var stars = require('./stars');
var sortEpisodes = require('./sortEpisodes');

var colors = require('colors/safe');

function fileactions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);
    //console.log(episodes[0])
    //console.log(`jrerbhhbfej ${episodes[0].title}`)
    console.log(sortEpisodes(episodes));

    

  	episodes.forEach(function(episode, index){
  		var newDescription = split(episodes[index].description);
    	var ratingStars = stars(episodes[index].rating)
  		printEpisode(episodes[index], newDescription, ratingStars);
  	})  

}

module.exports = fileactions;