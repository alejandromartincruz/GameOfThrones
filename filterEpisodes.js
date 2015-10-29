function filterEpisodes(episodes) {
	var filteredEpisodes = episodes.filter(function(episode){
  		return episode.rating < 8.5;
		});

    return filteredEpisodes;
}

module.exports = filterEpisodes;