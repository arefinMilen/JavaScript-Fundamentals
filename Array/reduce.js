let arr = [10, 15, 20, 25, 30];
let ans = arr.reduce((accumulator, value) => {
    return accumulator + value;
},0)
console.log(ans);