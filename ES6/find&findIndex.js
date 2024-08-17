let number =[1,3,5,6,71,81];
let firstEvenNumber = number.find(x => x%2===0);
let findIndexNumber = number.findIndex(x => x%2===0);
console.log(firstEvenNumber);
console.log(findIndexNumber);


// find using object 
const uniDept =
[

    {

        name:'diu',
        dept:15,
        top:'cse'
    
    
    },
    {

        name:'uap',
        dept:9,
        top:'pharmecy'
    
    
    },
    {

        name:'aust',
        dept:10,
        top:'eee'
    
    
    },
    {

        name:'brac',
        dept:13,
        top:'ce'
    
    
    },
]

console.log(uniDept.find(x=> x.dept>13));