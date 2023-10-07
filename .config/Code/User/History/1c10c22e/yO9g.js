const reverseString = function(inputString) {
    const inputArray = inputString.split();
    console.log("HI");
};

//testing purposes
let inputString = "Hello";

// convert string to array
const inputArray = inputString.split("");

let arrayLength = inputArray.length;

let reversedStringArray = [];

for (let i = 0; i < inputArray.length; i++){
    reversedStringArray.push(inputArray[arrayLength-1]);
}

reversedString = reversedStringArray.join();
console.log(arrayLength);
console.log(reversedString);



// Do not edit below this line
module.exports = reverseString;