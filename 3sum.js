const { log } = require("console");

nums = [-1,0,1,2,-1,-4]

var threeSum = function(nums) {

    for(let i=0; i<nums.length;i++) {
         
        for(let j=i+1 ; j<nums.length ; j++) {
            
            if(nums[i]==0 && nums[j]==0 && nums[j+1]==0) return [0,0,0]
            // if( nums[i]+nums[j])
            
         } 

    }
        
  };


let res= threeSum(nums)

log(res)