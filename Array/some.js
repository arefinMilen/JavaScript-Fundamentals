let arr = [1,2,3,4,5,6,7,8,9,10];
let ans = arr.some((val)=> {
    return  val >9; // it will return true if there is at least one value that is greater than 9, otherwise it will return false.
})
console.log(ans)