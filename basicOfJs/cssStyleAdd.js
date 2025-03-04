
var myVar = document.querySelector("#para");
function addStyle()
{
   myVar.classList.add("para-style");
}

function removeStyle()
{
   myVar.classList.remove("para-style");
}

var Text = document.querySelector("#para");
function my()
{
    
    Text.classList.add("check");
}

function you()
{
    
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


var h3Style = document.querySelector("h3")
h3Style.addEventListener("mouseover",function ()
{
    h3Style.classList.add("h3-style")
})
h3Style.addEventListener("mouseout",function ()
{
    h3Style.classList.remove("h3-style")
})

//multiple event listener selector
var len = document.querySelectorAll(".mybutton").length
for (i =0; i<len;i++)
{
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function()
    {
        var text =this.innerHTML
        document.querySelector("h6").innerHTML = text + " is clicked"
    })
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
