const removeFromArray = function(inputArray, value) {
    let index = inputArray.lastIndexOf(value)
};
const inputArray = [1,2,3,4];
let value = 3;

let index = inputArray.lastIndexOf(value);
console.log(index);
inputArray.splice(index, 1);
console.log(inputArray);

// Do not edit below this line
module.exports = removeFromArray;
