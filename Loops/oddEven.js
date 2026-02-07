let value = prompt("Enter a number: ")

for(let i = 1; i <= value; i++) {
    if(i % 2 === 0) {
        console.log(i + " is an even number")
    } else {
        console.log(i + " is an odd number")
    }
}