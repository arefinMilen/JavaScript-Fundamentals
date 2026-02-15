let func = (val)=> {
    val()
}

func(function(){
    console.log("good morning")
})