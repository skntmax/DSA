let arr1 = [1,3,76,32,12,33,56,35]

function peak(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);   
    if (arr[mid] > arr[mid + 1]) {
      right = mid; // Move towards the peak
    } else {
      left = mid + 1; // Move right
    }
  }
  return arr[left] ;
}

console.log(peak(arr1));

function binarySearch(arr,target ) {
  let left = 0 
  let right = arr.length-1 
  while(left<=right) {
     let mid  = Math.floor((left+right)/2)
     
     if(arr[mid]<target) {
       left = mid+1 
     }else{
        right = mid-1 
     }
     return mid
    }
    return -1
}



console.log( binarySearch(arr1, 3));
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













