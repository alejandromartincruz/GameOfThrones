function stars(rating) {

    var rating = Math.floor(rating);
    var ratingStars = [];
    for (var i = 1; i <= rating; i++) {
    ratingStars.push("*");
    }
    ratingStars = ratingStars.join("");
    return ratingStars;
}

module.exports = stars;