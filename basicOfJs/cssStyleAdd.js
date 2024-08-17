
var myVar = document.querySelector("#para");
function addStyle()
{
   myVar.classList.add("para-style");
}

function removeStyle()
{
   myVar.classList.remove("para-style");
}


function my()
{
    var Text = document.querySelector("#para");
    Text.classList.add("check");
}

function you()
{
    var Text = document.querySelector("#para");
    Text.classList.remove("check");
}


var myJs = document.querySelector("h2");
 myJs.addEventListener("mouseover",function(){
myJs.classList.add("listener");

});

var myJs= document.querySelector("h2");
myJs.addEventListener("mouseout",function()
{
myJs.classList.remove("listener");
});

//multiple event listener selector

for(i=0;i<3;i++)
{
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function()
    {
     var text = this.innerHTML;
        document.querySelector("h6").innerHTML=text + " is clicked";
    });
}

//text area keypress count 
var count = 0;
var Key = document.querySelector("textarea").addEventListener("keypress",function(event)
{
    count++;
    var text= event.key;
    document.querySelector("#count").innerHTML="you have pressed : "+count;
}
    )
