function AMto24format(time){ 
 
       let [ hr , minute , second ] = time.split(':')
        let currentTime  = hr>12?`${hr-12}:${minute} PM` :`${hr}:${minute} AM` 
      return currentTime
  }
   
// console.log( AMto24format('8:20:09') )
 
  
 
 
 
 
    function triplet(nums) {
    
        let finalArray =[]
         if(nums.length>3 &&  nums.length<=3000  ) {
        for(let i=0 ; i<nums.length ; i++ ){ 
            if( nums[i]> -(10**5)  && nums[i]<=(10**5) )  {
        //   console.log(nums[i]);
              
              for(let j=i+1 ; j<nums.length ; j++ ){
                let total = nums[i]+nums[j]+nums[j+1]
                 if(nums[i]==0 && nums[j]==0 && nums[j+1]==0 ){
                    return [0,0,0] 
                 }else{
                    if(total==0){
                        // console.log(total);
                           finalArray.push([nums[i],nums[j] ,nums[j+1]])   
                          }   
                      }
                  }
               }
               else{
           return [0,0,0] 
           }
         }     
        }else{
             return [0,0,0]
        }

        return finalArray
         
   }  

//  console.log(triplet([-1,0,1,2,-1,-4]) ) 
 console.log(triplet([0,1,1]) ) 
 