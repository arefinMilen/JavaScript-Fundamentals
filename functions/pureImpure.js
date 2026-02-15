let a = 12;

let pure = () => {
    console.log("this is pure function")
}
pure()
let impure = () => {
    a++;
    console.log("this is impure function", a)
}
impure()
