const potato = 25;
const apple = 250;
const orange = 350;
const banana = 200;

function  add(item1, item2) {
    return item1 + item2;
}
const bill1 = add(potato, apple);
const bill2 = add(orange, banana);
const totalBill = add(bill1, bill2);
console.log("Total Bill:", totalBill);


