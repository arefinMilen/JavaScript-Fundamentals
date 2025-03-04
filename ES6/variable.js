//variable decliaration 
let  x = 5;
if (true)
{
    let  x= 6;
}
console.log(x);

//function calling using ES6 version
const sum =(x,y) =>
{
  let sum = x + y;
  console.log(` sum of ${x} + ${y} is ${sum}`);

} 
sum(3,4);

//rest and default parameter

function printText(printText="please give a parameter what is you want to do!!")
{
    console.log(printText);
}
printText("this is too much painfull");
printText();



// number problems 
function number(x,y,...z)
{
    console.log(`x = ${x}, y = ${y}, z = ${z}`);
}
number(1,2,3,4,5);

//spread funtion is alternative as concatinate function 

let s1 = {
    name: 'arefin',
    age: 32

} 
let s2 = {
    // name: 'samsul',
    ocupation: 'student',
    nationality: "bangladeshi",

}
let s = {...s1,...s2}
console.log(s);

//object literal using es6

function message(name,age){
    return{
        name,
        age
    }

}
console.log(message("arefin",22));

//function call

let student = {
    'body name'(){
        return'hi, how are you all'
    }
}
console.log(student['body name']());