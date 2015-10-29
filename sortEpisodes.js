function sortEpisodes(episodes) {

	var sortedEpisodes = episodes.sort(function(prevEpisode, postEpisode){
  						return prevEpisode.episode_number-postEpisode.episode_number
						});
	   
    return sortedEpisodes;
}

module.exports = sortEpisodes;