let arr = [1,2,3,4,5,6,7,8,9,10];
let unorganized = [32,54,2,35,2,3,5,23,653]
// arr.splice(2, 3, "a", "b", "c");
let newArr = arr.slice(2,5);
let reverse = arr.reverse()
console.log(arr)
console.log(newArr)
console.log(reverse)


unorganized.sort((a,b)=> {
    return a - b;
})
console.log(unorganized)
