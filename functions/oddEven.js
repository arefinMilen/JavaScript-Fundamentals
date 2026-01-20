// Import the module
const prompt = require('prompt-sync')();
function isOddEven(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
let userInput =prompt("enter a valid number: ");
let result = isOddEven(Number(userInput));
console.log(`The number ${userInput} is ${result}.`);