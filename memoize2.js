
function memoise(ftn, context){

    return function() {      
    let res = {}
    let key = Object.toString(this || context) 
    if(!res[key]) {
         res[key] = ftn.apply(context || this )
    } 
    return res[key]
   }
} 



function bulkyTask(){

      let res = 0 
        for (let i=0; i<1000000; i++){
           res+=i
         } 
  return res 
} 

let  memoizedBulkyTask = memoise(bulkyTask) 

console.time("first call")
console.log(bulkyTask())
console.timeEnd("first call")


console.time("first call")
console.log(memoizedBulkyTask())
console.timeEnd("first call")