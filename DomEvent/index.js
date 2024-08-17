// var input = document.querySelector('input');
// input.addEventListener('change',changeHandler);

// console.clear();
// function changeHandler(e)
// {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.className);
//     console.log(e.target.id);
//     console.log(e.target.value);
// }

// const proLang = document.querySelectorAll("input[name=program]");
// // console.log(proLang);
// Array.from(proLang).map((program) => {
//     program.addEventListener("change",checkHndle);
// });

// console.clear();
// function checkHndle(e)

//  {
//     if(e.target.checked)
//     {
//         console.log(e.target.value);
//   console.log("checked");
//   }
    
//  }

//  const department = document.querySelector("#department");
//  //console.log(department);
//  department.addEventListener('change',dept);

//  function dept(e)
//  {
//     console.log(e.target.value);
//  }

//  const form = document.querySelector("form");
//  const name = document.querySelector("div #name");
//  const email = document.querySelector("div #email");
//  const password = document.querySelector("div #password");

//  form.addEventListener("submit",formHndle);
//  function formHndle(e)
//  {
//     e.preventDefault();
//     console.log("submit done!");
//     console.log(name.value);
//     console.log(email.value);
//     console.log(password.value);
    
//     const userInfo = 
//     {

//         name : name.value,
//         email : email.value ,
//         password : password.value ,
//     }
//     console.log(userInfo);
//     name.value = "";
//     email.value = "";
//     password.value = "";
//  }


//  const video = document.querySelector("video");
//  video.addEventListener("play",function()
//  {
//     console.log("play");
//  });

//  video.addEventListener("playing",function()
//  {
//     console.log("video is playing");
//  });
//  video.addEventListener("pause",function()
//  {
//     console.log("vedio is paused.");
//  });

//  video.addEventListener("ended",function()
//  {
//     console.log("video is ended.");
//  });
//  video.addEventListener("playing ",function()
//  {
//     console.log(" video is playing.");
//  });
//  video.addEventListener("volumechange",function()
//  {
//     console.log("volume changed");
//  });

// //load,unload,resize,toggle

// window.addEventListener("load",function()
// {
// console.log("load");
// });
// window.addEventListener("unload",function()
// {
// console.log("unload");
// });
// window.addEventListener("resize",function()
// {
//    const width = window.outerWidth;
//    const height = window.outerHeight;
// console.log(`height: ${height},width: ${width}`);
// });

// window.addEventListener("scroll",function()
// {
// console.log("scroll");
// });

// //toggle is used basically html element (details)!
// const details = document.querySelector("details");
// details.addEventListener("toggle",function(e)
// {
//    if(e.target.open)
//    {

//       console.log("successfully opend!");
//    }
//    else{
//       console.log("page clozed!");
//    }
// });

//mouse event is start!!


// div.addEventListener("dblclick",function()
// {
//    console.log("mouse is double clicked .");
// });

// //const div = document.querySelector(".div-name");
// div.addEventListener("mousedown",function()
// {
//    console.log("mousedown is clicked .");
// });

// //const div = document.querySelector(".div-name");
// div.addEventListener("mouseup",function()
// {
//    console.log("mouseUp is clicked .");
// });

// //const div = document.querySelector(".div-name");
// div.addEventListener("mouseenter",function()
// {
//    console.log("mouse enter  is clicked .");
// });

// div.addEventListener("mouseover",function()
// {
//    console.log("mouse over  is clicked .");
// });
// div.addEventListener("mouseleave",function()
// {
//    console.log("mouse leave  is clicked .");
// });
// div.addEventListener("mousemove",function(e)
// {

//    console.log("mouse move  is clicked .");
//    console.log("clientX ="+e.clientX + ",clietY = "+e.clientY);
//    console.log("offsetX ="+e.offsetX + ",offsetY = "+e.offsetY);

// });

const div = document.querySelector(".div-name");div.addEventListener("click",function(e)
{
   console.log("mouse is clicked .");
   console.log(e.target);
   console.log(e.target.innerHTML);
   console.log(e.target.innerText);
   console.log(e.target.className);
   console.log(e.target.id);
   console.log(e.target.textContent);
});

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

Array.from(buttons).map((button) => {
   button.addEventListener("click",function()
   {
      console.log("clicked");
   });
});

const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup",function(e)
{

   // console.log(e.keyCode);
    console.log(e.key);
   // console.log(e.code);
   //console.log(e.ctlKey);
   
   
   if(e.shiftKey)
   {
      console.log("shift+"+e.key);
   }
   

});
textarea.addEventListener("keydown",function(e)
{
   if(e.repeat)
   {
      alert("dont repeat same letter" +e.key);
   }
});

textarea.addEventListener("keypress",function()
{
  console.log("keypress");
});
 

const input = document.querySelector("input");

input.addEventListener("blur",function(e)
{
 console.log("input is blur");
 input.style.background ="transparent";
 input.style.padding ="0rem";
 input.value = e.target.value.toUpperCase();
});
input.addEventListener("focus",function()
{
 console.log("input is focus");
 input.style.background ="orange";
 input.style.padding ="2rem";
});
input.addEventListener("focusin",function()
{
 console.log("input is focusin");
});
input.addEventListener("focusout",function()
{
 console.log("input is focusout");
});


const p = document.querySelector("p");
input.addEventListener("copy",function(){
   p.innerText = "your text  copied";
   console.log("you have copied");
});
input.addEventListener('cut',function(){
   console.log("you have cut");
});
input.addEventListener('paste',function(){
  // console.log("you have pasted");
   p.innerText = "your text  PASTED";
});

const div2 = document.querySelector("#drag1");
const p2 = document.querySelector("#dragpara");
p2.addEventListener("dragstart",function(e)
{
   e.dataTransfer.setData("Text",e.target.id);
   //console.log("div2");
});
 div2.addEventListener("dragover",function(e)
 {
e.preventDefault();
 });

 div2.addEventListener("drop",function(e)
 {
   let id = e.dataTransfer.getData("Text");
   console.log(id);
   div2.appendChild(document.getElementById(id));
//e.preventDefault();
 });
    
