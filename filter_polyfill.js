  
 let arr = [1,2,4,5] 
  


Array.prototype.myFilter = function(cb){
     let res = []
      for(let i=0 ; i<this.length; i++ ) {
          if(cb(this[i], i , this )) {
             res.push(cb(this[i], i , this ))
          } 

      }

      return res 
      
}

  console.log(arr.filter((ele)=>ele>2  ));