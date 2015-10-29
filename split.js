function split(string){

	var middle = string.length/2

    var before = string.lastIndexOf(' ', middle);
	var after = string.indexOf(' ', middle + 1);

	if (middle - before < after - middle) {
    	middle = before;
	} else {
    	middle = after;
	}

	var subDescription1 = string.substr(0, middle);
	var subDescription2 = string.substr(middle + 1);

	return newDescription = [subDescription1, subDescription2];
}


module.exports = split;