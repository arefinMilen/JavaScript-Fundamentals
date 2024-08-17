const taskOne =(callback) =>
{
console.log("task one");
callback();
};
// const dataLoading =() =>
// {
//     console.log("task two data is loading ,sorry for inconvinient");
    
// }
const taskTwo =(callback) =>
{
    setTimeout (() => 
    {
        console.log("task two data is loading");
        callback();
    },3000);
// console.log("task two");

};
const taskThree =(callback) =>
{
console.log("task three");
callback();
};
const taskFour =(callback) =>
{
console.log("task four");
callback();
};
const taskFive =() =>
{
console.log("task five");
};

taskOne(() =>
{
    taskTwo(() =>
    {
        taskThree(() =>
        {
            taskFour(() =>
            {
                taskFive();
                
            });
        });
    });
});
// taskTwo();
// taskThree();
// taskFour();
// taskFive();
