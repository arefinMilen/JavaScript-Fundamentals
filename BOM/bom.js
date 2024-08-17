// console.clear();
// console.log(location);
// console.log(location.port);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.href);

// var locationDiv =document.querySelector(".location-Div");
// var p1= locationDiv.children[0];
// p1.textContent = location.href;

// var p2= locationDiv.children[1];
// p2.textContent = location.protocol;

// var p3= locationDiv.children[2];
// p3.textContent = location.port;

// var p4= locationDiv.children[3];
// p4.textContent = location.hostname;

// var p5= locationDiv.children[4];
// p5.textContent = location.pathname;

// const  btn = document.getElementById('btn');
// console.log(btn);
// btn.addEventListener("click",function()
// {

//     location.assign("https://arefinpiano.netlify.app/");
// });
//confirm("are u sure ?");
// function deleteMessage()
// {
//     let value = confirm("do u want to delete ?");
//     if (value)
//     {
//         console.log("deleted successfully!!");

//     }
//     else{
//         console.log("not deleted!");
//     }
// }
// deleteMessage();

// function welcomeMessage()
// {
//     var h1 = document.createElement('h1');
//     let text;
//     var name = prompt("Enter name :");
//     if(name == null || name == '')
//     {
//         text='no name founded';
//     }
//     else 
//     {
//         text =name;

//     }
//     let textNode = document.createTextNode(text);
//     h1.appendChild(textNode);
//     document.body.appendChild(h1);

// }
// welcomeMessage();

var setTime = document.querySelector(".set-time");
var setPara =document.querySelector(".set-para");

setTime.addEventListener("click",startClock);
function startClock()
{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);
    let time = hours +":"+minutes +":"+seconds;
//console.log(time);
    setPara.textContent = time;
    setInterval(startClock,1000);

}
{
    //console.log("time is set ");

    // setPara.style.color ="skyblue";
    // setPara.style.border="2px solid tomato ";
    // //setPara.style.backgroundcolor= "blue";

    // setPara.textContent = "user registration successful!!";
    

    // setTimeout(() => {
    //     setPara.textContent = "";
    //     //setPara.style.border ="";
    // }
    
    // ,2000);

function formatTime(value)
{
    if(value<10)
    {
        value = "0" + value;
    }
    return value;
}
};
