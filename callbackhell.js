// function  order(callback) {
     
//  setTimeout(()=>{
//     console.log("product ordered ");
//     callback()
//  } , 2000 )
    
// }

// function develivery(callback) {
//     setTimeout(()=>{
//         console.log("product delivery intitated");
//         callback()
//     } , 1000 )  

//     }
 

// order(develivery(()=>{
     
//      setTimeout(()=>{
//         console.log("checkout ")
//         // callback()
//      } , 3000 )
   
//     }))
const p1 = Promise.resolve(3);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
}); 

let result = Promise.all([p1 , p2 ,p3 ]).then(res=>{
      console.log(res);
}).catch(err=>{
     console.log(err);
})