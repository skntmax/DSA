let checksquare =(n)=>{
     
     for(let i=0; i*i <=n ; i++ ) {
    
         if((n%i==0) && (Math.floor(n / i) == i) ) {
             return true 
         }else 
              return false 
     }
    

}

console.log(checksquare(36));