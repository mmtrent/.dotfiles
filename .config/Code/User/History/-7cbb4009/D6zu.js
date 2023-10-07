const repeatString = function(inputString, numberOfRepeats) {
	let outputString = inputString;
	for (let i = 1; i < numberOfRepeats; i++) {
		outputString = inputString.concat(outputString);
	};

	return(outputString);
};

// Do not edit below this line
module.exports = repeatString;
