function cache(params) {
     let store =  {}
 
      return function(a,b ) {

         for(val in store) {
            if(store[val]) {
                 return store[val]
            }else{
                 let sum = a+b 
                store[a+b] =sum 
                return store[a+b]
            }
             
         }
         
      }
      
    
}

console.time();
console.log("first time >>"  ,  cache()(1,2) );
console.timeEnd();



console.time();
console.log("second time",  cache()(1,2) );
console.timeEnd();

