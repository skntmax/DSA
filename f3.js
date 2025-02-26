

// f1()

// function f1() {
//     console.log("f1")
// }

// let v1 =""

// function fn() {
//     for (var i = 0; i < 3; i++) {
//       setTimeout(() => console.log(i), 2000);
//     }
//   }
//   fn();


//   0,1,2

  // 3



//   console.log(4 + 2 + '3');   // 63 - string  
// console.log(2 + + '3');    // 5 
// console.log('3'+ 2 + 4);   // 324 
// console.log(true + true);  // 2   
// console.log(true + false);  // 1 
// console.log(false + false); // 0





// setTimeout(() => {
//     console.log("1")
//   });
  
//   setTimeout(() => {
//       console.log("2")
//     },
//     0);
  
//   setTimeout(() => {
//       console.log("3")
//     },
//     100);

//   console.log("4"); // 

//   let newPromise = new Promise((resolve, reject) => {
//     console.log("5")  // 5 
//     setTimeout(() => {
//       console.log("6")
//       resolve("7")
//     });
//   })

//   newPromise.then(result => {
//     console.log(result)
//   })



  // 4 
  // 5 
  // 6
  // 7
  // 1
  //2 
  //3 




//   let obj = {
//     name:{
         
//     },
//   }

//   let newObj = Object.assign({} , obj )


//   let p2 = JSON.parse( JSON.toString(obj))  // 


  let arr = [1,[[[3]]] , 4,6]


let res = []
 function customFlat(arr) {
    if(Array.isArray(arr) && arr.length==0) return res 
    for(let val of  arr ) {
         if(Array.isArray(val) && val.length>0) {
            customFlat(val)
         }else{
           res.push(val)
         }
        
    }
 
  }

//   customFlat(arr)
//   console.log(res)






  function sum(a) {

    
    return (b)=>{
        if(!b) return a 
        return sum(a+b)
    }
 
  }






//   sum((1)(5))

console.log(sum(1)(5)())

console.log(sum(1,2)(4)(5,6)())  



