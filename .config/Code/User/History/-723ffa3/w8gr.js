const removeFromArray = function(inputArray, value) {
    let index = inputArray.lastIndexOf(value);
    inputArray.splice(index, 1);
};

// Do not edit below this line
module.exports = removeFromArray;
