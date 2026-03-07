let obj = {
    name: {first:'arefin'}
}
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.name.first = 'arefin2';
console.log(obj);