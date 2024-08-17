document.querySelector('#btn').addEventListener('click',function()

{
    //alert("button is clicked");
 var num = document.querySelector("#numInput").value;
 console.log(num);
 try{
    if(num<10)
    {
        throw "input is too low"
    }
    else if (num>30)
    {
        throw "input is too high"
    }
 }catch(err)
 {
    console.log(err);
 }
});