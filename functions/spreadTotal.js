let spreadTotal = (...sum) => {
    let total = 0;
    sum.forEach((val)=>{
        total+=val;
    })
console.log(total)
}
spreadTotal(1,2,3,4,5,6);