let counter = () => {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
let c = counter();
console.log(c())
console.log(c())
console.log(c())
console.log(c())

let d = counter();
console.log(d())
console.log(c())