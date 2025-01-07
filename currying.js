function currying(a) {
  
     return (b)=>{
         if(!b) return a  
         return  currying(a+b)
     }
}

let res =  currying(2)(5,2)(2,1)(1)(2)()

console.log( res );