const removeFromArray = function(inputArray, value) {
    let index = inputArray.lastIndexOf(value);
    inputArray.splice(index, 1);
    return(inputArray);
};

// Do not edit below this line
module.exports = removeFromArray;
