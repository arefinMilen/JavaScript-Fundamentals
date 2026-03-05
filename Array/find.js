let arr = [1,2,3,4,5,6,7,8,9,10];
let foundValue = arr.find((value) => {
    return value > 5; // its return the first value that is greater than 5 not all values, if there is no value greater than 5 it will return undefined.
});
console.log(foundValue);