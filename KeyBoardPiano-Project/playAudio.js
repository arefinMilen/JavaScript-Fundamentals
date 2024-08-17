for(var i=0;i<24;i++)
{

    document.querySelectorAll(".myButton")[i].addEventListener("click",function()
{

    var text = this.innerHTML;
    console.log(text);
    audioPlay(text);
    setAnim(text);


   
});
}

function audioPlay(text)
{
    switch(text){

        case "a":

        var audio = new Audio("sound/key21.mp3");
        audio.play();
        break;

        case "b":

        var audio = new Audio("sound/key22.mp3");
        audio.play();
        break;

        case "c":
        var audio = new Audio("sound/key23.mp3");
        audio.play();
        break;
        case "d":
        var audio = new Audio("sound/key24.mp3");
        audio.play();
        break;

        case "e":

        var audio = new Audio("sound/key01.mp3");
        audio.play();
        break;

        case "f":

        var audio = new Audio("sound/key02.mp3");
        audio.play();
        break;

        case "g":
        var audio = new Audio("sound/key03.mp3");
        audio.play();
        break;
        case "h":
        var audio = new Audio("sound/key04.mp3");
        audio.play();
        break;
        case "i":

        var audio = new Audio("sound/key05.mp3");
        audio.play();
        break;

        case "j":

        var audio = new Audio("sound/key06.mp3");
        audio.play();
        break;

        case "k":
        var audio = new Audio("sound/key07.mp3");
        audio.play();
        break;
        case "l":
        var audio = new Audio("sound/key08.mp3");
        audio.play();
        break;
        case "m":

        var audio = new Audio("sound/key09.mp3");
        audio.play();
        break;

        case "n":

        var audio = new Audio("sound/key10.mp3");
        audio.play();
        break;

        case "o":
        var audio = new Audio("sound/key11.mp3");
        audio.play();
        break;
        case "p":
        var audio = new Audio("sound/key12.mp3");
        audio.play();
        break;
        case "q":

        var audio = new Audio("sound/key13.mp3");
        audio.play();
        break;

        case "r":

        var audio = new Audio("sound/key14.mp3");
        audio.play();
        break;

        case "s":
        var audio = new Audio("sound/key15.mp3");
        audio.play();
        break;
        case "t":
        var audio = new Audio("sound/key16.mp3");
        audio.play();
        break;
        case "u":

        var audio = new Audio("sound/key17.mp3");
        audio.play();
        break;

        case "v":

        var audio = new Audio("sound/key18.mp3");
        audio.play();
        break;

        case "w":
        var audio = new Audio("sound/key19.mp3");
        audio.play();
        break;
        case "x":
        var audio = new Audio("sound/key20.mp3");
        audio.play();
        break;

        case "y":
        var audio = new Audio("sound/key01.mp3");
        audio.play();
        break;
        case "z":
        var audio = new Audio("sound/key02.mp3");
        audio.play();
        break;

    }
}

function setAnim(text){
 var selecButton =  document.querySelector("."+text);
 selecButton.classList.add("anim");

setTimeout(function()
{
    var selector =  document.querySelector("."+text);
    selector.classList.remove("anim");
},1000)
}


//keypress listener add

document.addEventListener("keypress",function(event)
{
    var text = event.key;
    audioPlay(text);
    setAnim(text);
});
