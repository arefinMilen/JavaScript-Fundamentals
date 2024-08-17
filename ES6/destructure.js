//array destructure 
let num = [10,12,14,16,20]
let [num1,num2,...z]=num
console.log(num1);
console.log(num2);
console.log(...z);

//object destructure 

const studentInfo ={
    name : 'samsul arefin',
    id : 5279,
    cgpa: 3.50,
     skills :{
        programming:'c,c++,java,javaScript,python',
        web:'frontEnd',
     }
}
const {id,cgpa,skills} = studentInfo
console.log(id);
console.log(cgpa);
console.log(skills.programming);

// console.log(studentInfo.name);
// console.log(studentInfo.id);
// console.log(studentInfo.cgpa);



//swaping  number 

let a = 10;
let b = 20;
[a,b]=[b,a];
console.log(a);
console.log(b);

//destructing function parameters

const myselfInfo = ({name,id}) => {
 console.log(`${name},${id}`);
}

const myself = {
    name : 'arefin',
    id: 5279

}
myselfInfo(myself)