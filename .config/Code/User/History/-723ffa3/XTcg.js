const removeFromArray = function() {
    const inputArray = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        let indexToRemove = inputArray.indexOf(arguments[i]);

        // indexOf returns -1 if the element is not found
        if (indexToRemove !== -1) {
            // use splice to remove the element from the array if it was found by indexOf
            inputArray.splice(indexToRemove, 1);
        }
    }
    return(inputArray);

};


// Do not edit below this line
module.exports = removeFromArray;
