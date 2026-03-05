let arr = [10,5,12,32,55,4,12,24,32,23,85,36,45,23,65,23,54,23,65,23];
let filteredArr =arr.filter((value) => {
    if(value > 50) return value;
    else return false;
})
console.log(filteredArr)