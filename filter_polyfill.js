  
 let arr = [
    {name:"skntmax" ,addres:"kapur" } , 
    {name:"skntmax1" ,addres:"kapur1" } , 
    {name:"skntmax2" ,addres:"kapur2" } , 
    {name:"skntmax3" ,addres:"kapur2" } , 
] 
  

Array.prototype.myFilter = function(cb){
     let res = []
      for(let i=0 ; i<this.length; i++ ) {
          if(cb(this[i], i , this )) {
            res.push(this[i])           
           } 
       }
       return res 
  }

  console.log(arr.myFilter((ele)=> ele.name=="skntmax" ));


console.log(arr.filter((ele)=> {
    if(ele.name=="skntmax") {
      return { md :"modified " , ...ele  }
    }
  
} ));



