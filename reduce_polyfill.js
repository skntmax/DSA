let arr = [1,3,4,5]


Array.prototype.myReduce = function(cb , acc){
    if(acc){
        for(let i=0 ; i<this.length; i++ ) {
             let cb_res =  cb(this[i] , i , this , acc )
             acc =acc+ cb_res    
          }
     } 
      return acc
 }

 console.log(arr.myReduce((ele,i, arr, acc)=> acc+ele ) , 0 );
 console.log(arr.reduce((ele, acc)=>  acc+ele   ) , 0 );


 




