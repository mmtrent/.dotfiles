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

for (let i = 0; i < arrayLength; i++){
    reversedStringArray[i] = reversedStringArray.push(inputArray[i-1]);
}

let reversedString = reversedStringArray.join("");
console.log(arrayLength);
console.log(reversedString);



// Do not edit below this line
module.exports = reverseString;