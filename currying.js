
function currying(a){ 
      
      return(b)=>{
        if(b) {
             return  currying(a+b)
        }else
        return a     
     }    

}



let sum =currying(2)(3) 
console.log(sum()) 