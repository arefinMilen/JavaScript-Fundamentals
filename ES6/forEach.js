// using for each loop 

var number = [1,2,3,4,5];
var squareNumber =[];
console.log(number);
number.forEach(function(x,index,arr) {
    //console.log(x);
    arr[index] = x+2;
    squareNumber.push(x*x);
})
console.log(number);
console.log(squareNumber);
//console.log(number);
    

