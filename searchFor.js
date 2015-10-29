function searchFor(episodes) {
	var hereIs = [];
	var n;
	episodes.forEach(function (episode, index){
		n = episode.description.indexOf("Jon Snow");
		if (n == -1) {
			
		} else {
			hereIs.push(episode);
		} 
	})
	return hereIs;
}

module.exports = searchFor; 