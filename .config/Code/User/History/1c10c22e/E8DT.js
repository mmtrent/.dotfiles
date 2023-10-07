const reverseString = function(inputString) {
// convert string to array
    const inputArray = inputString.split("");

    let arrayLength = inputArray.length;

    let reversedStringArray = [];

    for (let i = 0; i < arrayLength; i++){
        reversedStringArray[i] = [inputArray[arrayLength - (i + 1)]];
    }

    let reversedString = reversedStringArray.join("");
    return(reversedString);
};

// Do not edit below this line
module.exports = reverseString;