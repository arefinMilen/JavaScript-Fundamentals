const taskOne = () => {
    console.log("task one is completed.");
}
const dataLoading = ()=> 

{
    console.log("task two .data is loading ");
}
const taskTwo = () => {
    // console.log("task two is completed.");
    setTimeout(dataLoading)
}

const taskThree = () => {
    console.log("task three is completed.");
}
const taskFour = () => {
    console.log("task four is completed.");
}
const taskFive = () => {
    console.log("task five is completed.");
}


taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();