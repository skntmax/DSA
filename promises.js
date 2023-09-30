let prms1 = new Promise((resolve, reject )=>{

     setTimeout(()=>{
           resolve({message:"promise 1 "})
     },2000)
})


let prms2 = new Promise((resolve, reject )=>{

    setTimeout(()=>{
          resolve({message:"promise 2 "})
    },4000)

})

let prms3 = new Promise((resolve, reject )=>{
    setTimeout(()=>{
          resolve({message:"promise 3 "})
    },5000)

})



let prms4 = new Promise((resolve, reject )=>{
    setTimeout(()=>{
          reject({message:"rejected msg 4"})
    },5000)

})



Promise.all([prms1,prms2,prms3]).then(res=>{
     console.log(" promsie.all response ", res);
}).catch(err=>{
     console.log("err", err);
})


Promise.race([prms1,prms2,prms3 ]).then(res=>{
    console.log(" promsie.race response>>  ", res);
}).catch(err=>{
    console.log("err", err);
})

Promise.any( [prms1,prms2,prms3 ,prms4 ] ).then(res=>{
    console.log(" promsie.race response >>  ", res);
}).catch(err=>{
    console.log("err", err);
})
