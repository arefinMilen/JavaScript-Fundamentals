console.clear();
//post data for axios 
// axios.post("https://jsonplaceholder.typicode.com/posts",{
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'milen',
//       body: 'samsul arefin',
//       userId: 1,
//     }),
   
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err));

//use put method for update a data
// axios.put("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PUT',
//     body: JSON.stringify({
//         id:1,
//       title: 'milen',
//       body: 'samsul arefin',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err));

//patch data means when u update custom data 
// axios.patch("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PATCH',
//     body: JSON.stringify({
      
//       body: 'AREFIN MILEN',
    
//     }),
    
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err));

//DELETE METHODE 
// axios.delete("https://jsonplaceholder.typicode.com/posts/1" )
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err));


//create a method and call multiple time to exicute 
// const  makeRequest =async(config)=>
// {
//     return await axios(config);
// }

// const getData=()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1").then((res)=>console.log(res)).catch((err)=>console.log(err));
// }
// getData();





//crete data by using function 

// const  makeRequest =async(config)=>
// {
//     return await axios(config);
// }

// const createData=()=>{
//     makeRequest(
//         {
//             url:"https://jsonplaceholder.typicode.com/posts",
//             methode:"post",
//             data:  JSON.stringify({
//                 title: 'foo ',
//                 body: 'bar',
//                 //id:1,
//                 userId: 1,
//               }),
//         })
        
//         .then((res)=>console.log(res)).catch((err)=>console.log(err));
// }
// createData();

//update data 
// const makeRequest =async(config)=>
// {
//     return await axios(config);
// };
// const updateData=()=>{
//     makeRequest(
//         {
//             url:"https://jsonplaceholder.typicode.com/posts/1",
//             method:"put",
//             data:  JSON.stringify({
//                 id:1,
//                 title: 'foowang',
//                 body: 'barma',
//                 userId: 1,
                
//               }),
//         })
        
//         .then((res)=>console.log(res.data)).catch((err)=>console.log(err));
// };
// updateData();



//delte data 
const makeRequest =async(config)=>
{
    return await axios(config);
};
const deleteData=()=>{
    makeRequest(
        {
            url:"https://jsonplaceholder.typicode.com/posts/1",
            method:"delete",
          
        })
        
        .then((res)=>console.log(res.data)).catch((err)=>console.log(err));
};
deleteData();