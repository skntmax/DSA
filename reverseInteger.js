x = 1534236469

var reverse = function(x) {
    let max = -(2**31)
    let min = (2**31)-1
     
    if( x>=max && x<=min ) {
        if(x<0){
            let arr = x.toString().split('')
      let value = ''
       
       for(let i=arr.length-1; i>=1; i--) {
            value+=arr[i]
       }
         return  parseInt(arr[0]+value)  
        }  
        
        else{
            
       let arr = x.toString().split('')
      let value = ''
       for(let i=arr.length-1; i>=0; i--) {
            value+=arr[i]
       }
         return  parseInt(value) 
        }
  
    } 

   
};

   console.log( reverse(x) )

// console.log(-(2**3))
