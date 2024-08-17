console.log("well come");
const promise1 = new Promise((resolve,rejecet) =>
{
    // //if the value is true then  work if conditon and else condition represent false 
    // if(completedPromise){
    //     resolve('promise is completed');

    // }
    // else{
    //     rejecet("promise is not completed");
    // }

    setTimeout(()=>
    {
        resolve("data1 is rejected");
    },3000);

});

const promise2 = new Promise((resolve,rejecet) =>
{
// resolve("promise 2 is occoured");


setTimeout(()=>
{
    resolve("data2 is rejected");
},1000);
});

// promise1.then((res)=>
// {
//     console.log(res);
// }).catch((err)=>
// {
// console.log(err);
// }); 
// promise2.then((res)=>
// {
//     console.log(res);
// });

//if we need multiple promises then we can use array to solve the problem 

// Promise.all([promise1,promise2]).then(([res1,res2]) =>console.log(res1,res2));



//race is work basically which is execute shortest time among multiple promises.
Promise.race([promise1,promise2]).then((res) =>console.log(res));


console.log("end");