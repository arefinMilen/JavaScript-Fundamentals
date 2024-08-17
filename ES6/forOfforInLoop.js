// for of loop using 
let names = ['samsul','arefin','milen'];
for(let name of names){
    console.log(name);
}

let students = {
    name: 'arefin',
    id:'221-15-5279',
    age:23 
}
for(let x in students)
{
    console.log(`${x} : ${students[x]}`);
}