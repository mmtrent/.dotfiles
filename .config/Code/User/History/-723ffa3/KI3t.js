const removeFromArray = function() {
    const inputArray = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        let indexToRemove = inputArray.indexOf(arguments[i]);
        inputArray.splice(index, 1);
    }
    return(inputArray);

};

// Do not edit below this line
module.exports = removeFromArray;
