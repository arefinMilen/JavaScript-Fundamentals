//const promise1 = new Promise((resolve,reject));

const taskOne = ()=> {
return new Promise((resolve,reject)=>
{
    resolve("task one is completed");
}); 
};

const taskTwo = ()=> {
return new Promise((resolve,reject)=>
{
    resolve("task two is completed");
}); 
};

const taskThree = ()=> {
return new Promise((resolve,reject)=>
{
    resolve("task three is completed");
}); 
};

const taskFour = ()=> {
return new Promise((resolve,reject)=>
 { 
    setTimeout(()=>
    {
        resolve("task 4 data is too large ..");
    },2000); 

    //resolve("task four is completed");
});
};

const taskFive = ()=> {
return new Promise((resolve,reject)=>
{
    resolve("task five is completed");
}); 
};


async function callAllTask(){
   try{
    const t1 =  await taskOne();
    console.log(t1);
    const t2 =  await taskTwo();
    console.log(t2);
    const t3 =  await taskThree();
    console.log(t3);
    const t4 =  await taskFour();
    console.log(t4);
    const t5 =  await taskFive();
    console.log(t5);
   }
   catch(e)
   {
    console.log(e);
   }
   
};



callAllTask();


// taskOne()
// .then((res)=> console.log(res));