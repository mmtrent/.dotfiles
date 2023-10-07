const repeatString = function(inputString, numberOfRepeats) {
	if (numberOfRepeats = 0) {
		return("");
	} else if (numberOfRepeats < 0) {
		return("ERROR");
	} else if (numberOfRepeats > 0) {

		let outputString = inputString;
		for (let i = 1; i < numberOfRepeats; i++) {
			outputString = inputString.concat(outputString);
		};
	}
	return(outputString);
};

// Do not edit below this line
module.exports = repeatString;
