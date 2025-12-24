const myPromise  = (delay)=>{
  return new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      console.log('Promise resolved successfully! after', delay );
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");  
    }
  }, delay);
});   
} 


// concurrent request
(async function() {
  myPromise(1000).then(res=>{
     myPromise(2000).then(res=>{
         myPromise(3000).then(res=>{
             
         })
     })
  })
    
})()

// parallel request
    myPromise(1000)
    myPromise(2000)
    myPromise(3000)

//  alternate  parallel request 
(async function() {
let  prms =await  Promise.all([myPromise(1000),myPromise(2000),myPromise(3000)])
console.log(prms); 
})()