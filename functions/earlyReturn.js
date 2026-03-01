let checkAge = (age) => {
    
    if(age < 18) return "underAge";
    return "matured"
}
let ans = checkAge(27)
console.log(ans);