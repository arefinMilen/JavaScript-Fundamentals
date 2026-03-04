function discounter (count) {
    return function (price) {
        return price - price * (count/100)
    }
}
let ten = discounter(10);
let twenty = discounter(20);
console.log(ten(1000))
console.log(twenty(1000))
