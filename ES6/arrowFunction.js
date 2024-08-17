// traditon function and arrow function 

function add()
{
    return "hi ,this is samsul arefin "
}
console.log(add());

const  my = () => "hi , this is arrow function";
const num = (num1,num2) => num1+num2;
  console.log(num(20,30));


  // arrow function using object 

var students =[
    {
        name : 'samsul',
        id   : 5279,
        cgpa: 3.50
    },
    
    {
        name: "rakib",
        id  : 4814,
        cgpa: 3.10
    },
    {
        name: "romman",
        id  : 5330,
        cgpa: 3.20
    },
    {
        name: "Bipul",
        id  : 4925,
        cgpa: 3.75
    },
    
    
]

const stu1 = () => students.filter( (x) => x.cgpa > 3.40 ) .map( (y) => y.name);

console.log(stu1());
