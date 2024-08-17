var number = [1,2,3,4]
var squareNumber = number.map(function(x)
{
    return x*x ;
})
console.log(number)
console.log(squareNumber)

//data filtering 
var number = [10,22,33,44,55,66,77,88,99,100]
var newNumber = number.filter(function(x)
{
    return x>40;
})
console.log( `your filter data is : ${newNumber}`)
//console.log(squareNumber)