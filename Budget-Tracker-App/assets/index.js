// budget tracker app

const userName = "Samsul Arefin";
const income = 3000;
const expenses = 2000;

// multiple expenses
let rent = 1000;
let groceries = 200;
let utilities = 100;
let internet = 50;

// calculate total expenses
let totalExpenses = rent + groceries + utilities + internet;

// tax deduction(10% of income)
let tax = income * 0.10;

// net income after tax
let netIncome = income - tax;

// remaining balance
let balance = netIncome - totalExpenses;

// saving 20% of balance
let saving = balance * 0.20;

console.log("My personal budget Tracker app!!!");
console.log('User: '+userName);
console.log('Total Income: $'+income);
console.log('Total Expenses: $'+totalExpenses);
console.log('Tax Deduction (10%): $'+tax);
console.log('Net Income After Tax: $'+netIncome);
console.log('Remining Balance: $'+balance);
console.log('Saving (20% of balance):$' +saving);
console.log('Happy Saving!!!');