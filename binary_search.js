let arr =[3,6,7,8,9,90,3,4,54,55 , 6 , ]


function removeDepulicate(array){
      return array.filter((ele, ind )=>array.indexOf(ele)==ind)
}

function finDuplicateValue(array){
     let s = new Set()
     let deplicate= [ ]
      for(let val of array) { 
          if(!s.has(val)) {
             s.add(val)  
          }else{
             deplicate.push(val)
          }
      }
       
      return {
        deplicate , unique: Array.from(s)
      }

    //  return array.filter((ele, ind )=>array.indexOf(ele)==ind)
}


// [
//     1,  3, 6,  7,  8,  9, 90, 4, 54, 55
//     i=0                   tr            p=10 
//   ]


function binary_search(arr , target ){
           
            let i=-1
            let p=arr.length
             
              while(i<=p) {
                    let middle = Math.floor( (i+p)/2 ) //5
                   if( arr[middle]==target) { 
                     return middle 
                   }else if( arr[middle]<target ) {
                         i =middle-1
                   }else if(arr[middle] > target) {
                        p= middle+1
                   }
              }
  
            

}


console.log(finDuplicateValue(arr))




// removing  doplicate value   
        let unique_arr  = removeDepulicate(arr) 
// removing  doplicate value   
 

//applying binary search 
        console.log(binary_search(unique_arr , 8)) 
//applying binary search 

