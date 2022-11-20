// Input: x = 8
// Output: 2
// Explanation:
//  The square root of 8 is 2.82842..., 
//  and since we round it down to the nearest integer, 2 is returned.


 const sqrtChecker = (x)=>{
     
     
const mySqrt = function(n=10) {
       
    if(n==0) {
        return 1     
     }
       n = n-1
      let val = 2*mySqrt(n)
       
      return val 
};

   if(val==mySqrt()) {
     return 2 
   }else{
    return false 
   }

    


 }
  
 


console.log( sqrtChecker(8))