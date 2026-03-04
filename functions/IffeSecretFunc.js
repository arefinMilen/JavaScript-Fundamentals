(function() {
    let info = "I am a secret function";
    console.log(info);
}())
// console.log(info)   this will give an error because info is not accessible outside the IIFE.