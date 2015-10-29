var colors = require('colors/safe');

function printEpisode(episode, splittedDescription, ratingStars) {

    console.log(colors.green('Title: ') + episode.title + "   Episode" + colors.grey(" #: " + episode.episode_number));
    console.log(splittedDescription[0] + colors.red(splittedDescription[1]));
    console.log(colors.red("Rating: " + episode.rating) + "  " +ratingStars);

}

module.exports = printEpisode;