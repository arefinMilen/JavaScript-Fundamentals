let pr =new Promise((res,rej)=>{
    setTimeout(()=>{
       let rn = Math.floor(Math.random() * 10);
         if(rn>5) {
            res("resolved num is " + rn)
         } else {
            rej("rejected num is " + rn)
         }
         
    },2000)
})

async function result() {
    try {
        let data = await pr;
        console.log(data);

    } catch (err) {
        console.log(err);
    }
}

result();