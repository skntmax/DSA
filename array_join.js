let arr1 = [1,3,76,32,12,33,56,35]

   // console.log(...arr1);
   
   //  function arrayJoin(array){           
   //     return function (seperator){
   //            let finalArray = []
   //          for(let i=0 ; i<array.length ; i++){
   //               if(i=0){
   //                 finalArray.push(array[i]+seperator)
   //               }else if(i==array.length-1){
   //                 finalArray.push(seperator+array[i])
   //               }else{
   //                 finalArray.push(array[i]+seperator)
   //               }
   //           }
   //         return finalArray
   //      }              
               
   //      }

    
    
   function arrayJoin(array){           
      return function (seperator){
            let finalStr = ''
             for(let i=0; i<array.length ; i++){
                if(i==0){
                  finalStr=finalStr+array[i]+seperator                               
                }else if (i==array.length-1){
                  finalStr=finalStr+array[i]                              
                }else{
                  finalStr=finalStr+array[i]+seperator                               
                }             
                  }
            return finalStr
       }              
              
       }

        console.log( arrayJoin(arr1)('-')) 













