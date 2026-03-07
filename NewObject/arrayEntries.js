let obj = {
    name: 'arefin',
    age: 25,
    profession: 'developer'
}
Object.entries(obj).forEach( (val) => {
    console.log(val[0],":",val[1]);
})