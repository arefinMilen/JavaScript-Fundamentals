//all code in a try block 
try{
    alert("hi everyone");
    alert(x);
}
//if try block faced a error then you should back up code to execute in a catch block.
catch(error){
    console.log(error);
    console.log(error.message);
    alert("bye everyone");
}
//finally block always execute.
finally
{
    console.log("your program has error or not doesn't matter , finnaly block is always execute ");
}
//these ara acutally runtime error handler not syntex error handler.