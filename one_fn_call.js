// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// let  fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
let fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":140}]
 
var once = function(fn) {
     let calls = 1 
      return function(...args){
        // console.log(args)     
        if(calls<=1) {
               let res =  fn(...args)
                calls++
                return [{calls:calls-1, value:res }]
             }
             return undefined
          
     }
      
};


const onceFn = once(fn)
console.log(onceFn(5, 7, 4)) ; // 140
console.log(onceFn(2, 3, 6)) ; // undefined, fn was not called
console.log(onceFn(4, 6, 8)) ; // undefined, fn was not called




// function once(fn) {
//     let called = false;
//     let result;

//     return function(...args) {
//         if (!called) {
//             result = fn(...args);
//             called = true;
//             return result;
//         } else {
//             return undefined;
//         }
//     };
// }