var grade = parseFloat(prompt("Enter a number for grade : "));

if (grade>=80)
console.log("A+");


else if(grade>=70 && grade <=79)
console.log("A");

else if(grade>=60 && grade <=69)
console.log("A-");

else if(grade>=50 && grade <=59)
console.log("B");

else if(grade>=40 && grade <=49)
console.log("C");

else if(grade>=33 && grade <=39)
console.log("D");

else 
console.log("Fail");