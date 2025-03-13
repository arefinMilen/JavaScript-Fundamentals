const username = prompt("Enter your name: ");
const totalIncome = parseFloat(prompt("Enter your total income: "));
const numOfExpenses = parseInt(prompt("How many expenses do you have : "));
if(isNaN(totalIncome) || isNaN(numOfExpenses) || totalIncome <= 0 || numOfExpenses < 0) {
    console.log("Invalid input !!! please enter a valid input again ");
}
else{
    let totalExpenses = 0;

for (let i = 1; i <= numOfExpenses; i++) {
    let expense = parseFloat(prompt("Enter expense " + i + ":"));
    if(isNaN(expense) || expense < 0) {
        console.log(`Invalid input for expense ${i}, setting it to $0`);
        expense = 0;
    }
    totalExpenses+=expense;
}
// tax deduction(10% of income)
const tax = totalIncome * 0.10;

// net income after tax
const netIncome = totalIncome - tax;

// remaining balance
const balance = netIncome - totalExpenses;

// saving 20% of balance
const saving = balance * 0.20;

// financial status
let finalStatus = '';
if(saving >=1000){
    finalStatus ='You are saving good amount of money';
}
else if(saving >=500){
    finalStatus ='You are saving a decent amount of money';
}
else if( saving >=100){
    finalStatus ='You are saving some money';
}
else{
    finalStatus ='your saving is too low';
}

// check if expenses is greater than income
let overSpendingMessage = '';
if(totalExpenses > totalIncome){
    overSpendingMessage = 'You are over spending your budget';
}
console.log("My personal budget Tracker app!!!");
console.log('User: '+username);
console.log('Total Income: $'+totalIncome);
console.log('Total Expenses: $'+totalExpenses);
console.log('Tax Deduction (10%): $'+tax);
console.log('Net Income After Tax: $'+netIncome);
console.log('Remining Balance: $'+balance);
console.log('Saving (20% of balance):$' +saving);
console.log('Happy Saving!!!');
console.log(finalStatus);
if(overSpendingMessage){
    console.log(overSpendingMessage);
}
}
