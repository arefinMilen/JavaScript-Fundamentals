function addNumbers(a, b)  {
    console.log("Arguments object:", arguments);
    return a + b;
}
const sum = addNumbers(5, 10, 15, 20); // Extra argument '15' will be ignored
console.log("Sum:", sum);


function sumALL(a , b) {
    let total = 0;
    for (const num of arguments) {
        total += num;

}
console.log("total:", total);
}
sumALL(5, 10, 15, 20, 25);