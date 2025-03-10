// budget tracker app

const userName = "Samsul Arefin";
const income = 3000;
const expenses = 2000;

// multiple expenses
const rent = 1000;
const groceries = 200;
const utilities = 100;
const internet = 50;

// calculate total expenses
const totalExpenses = rent + groceries + utilities + internet;

// tax deduction(10% of income)
const tax = income * 0.10;

// net income after tax
const netIncome = income - tax;

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
if(totalExpenses > income){
    overSpendingMessage = 'You are over spending your budget';
}

console.log("My personal budget Tracker app!!!");
console.log('User: '+userName);
console.log('Total Income: $'+income);
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
