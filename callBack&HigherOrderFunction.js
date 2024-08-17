const square = (x) =>
{
    console.log(`square of ${x} is : ${x*x}`);
}

// const y = square;
// y(5);



//call back and higher order function call 
const HigherOrderFunction =(num,callback) =>
{
 callback(num)
}

HigherOrderFunction(7,square)