const taskOne = () => {
    return new Promise( (resolve,reject)=>
    {
        resolve("task one is completed ");
    });
};
const taskTwo = () => {
    return new Promise( (resolve,reject)=>
    {
        resolve("task two is completed ");
    });
};
const taskThree = () => {
    return new Promise( (resolve,reject)=>
    {
        resolve("task three is completed ");
        reject("task three is not completed");
    });
};
const taskFour = () => {
    return new Promise( (resolve,reject)=>
    {
        resolve("task four is completed ");
    });
};
const taskFive = () => {
    return new Promise( (resolve,reject)=>
    {
        resolve("task five is completed ");
    });
};

taskOne()
.then( (res) => console.log(res))
.then(taskTwo)
.then( (res)=> console.log(res) )
.then(taskThree)
.then( (res) => console.log(res))
.then(taskFour)
.then( (res) => console.log(res))
.then(taskFive)
.then( (res) => console.log(res) )
.catch((err)=> console.log(err)); 