let arr =[ ]


let designation =  [
  {
    "id": 146,
    "name": "ASSISTANT MANAGER",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:52:36.375Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 148,
    "name": "ASSISTANT SURVEYOR",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:53:11.556Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 149,
    "name": "CONSTRUCTION MANAGER",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:53:26.814Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 130,
    "name": "Director",
    "description": "Director",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-20T10:53:14.235Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 145,
    "name": "ENGINEER",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:52:25.457Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 153,
    "name": "SENIOR OFFICER",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:54:41.790Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 151,
    "name": "SITE HR",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:53:58.426Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 152,
    "name": "STORE KEEPER",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:54:27.194Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 147,
    "name": "SUPERVISOR",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:53:01.250Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 150,
    "name": "SURVEYOR",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:53:41.767Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 144,
    "name": "TRANLATOR CUM  EXECUTIVE",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:52:15.506Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 143,
    "name": "TRANSLATOR",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:52:05.167Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  }
]


let Genders = [
  {
    "id": 8,
    "name": "Male",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:58:46.607Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 9,
    "name": "Female",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:58:54.552Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 10,
    "name": "Other",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T09:59:00.954Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  }
]



let married_status = [
  {
    "id": 6,
    "name": "Single",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T10:06:08.455Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  },
  {
    "id": 7,
    "name": "Married",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T10:06:15.196Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
  }
]

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
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
      let middle = Math.floor((start + end) / 2);
 console.log("middle" ,middle)
      if (arr[middle] === target) {
          // found the target
          return middle;
      } else if (arr[middle] < target) {
          // continue searching to the right
          start = middle + 1;
      } else {
          // search searching to the left
          end = middle - 1;
      }
  }
  // target wasn't found
  return -1;
}



function binary_search_recursive(arr , target , start , end    ){
      debugger  
       let mp = Math.floor((start+end)/2)
        while(start<end) {
             if(arr[mp]==target) {
               return mp
             }
             else if(target<arr[mp]){
                  binary_search_recursive( arr,target, start , mp-1 )
             }else{
               
              binary_search_recursive( arr, target, mp+1 , end )
               
             } 
          }
      }

      
      // function searchByObject( target , arr , key ) {
      //   let start = 0;
      //   let end = arr.length - 1;
      //   while (start <= end) {
      //     let middle = Math.floor((start + end) / 2);
      //     // NOTE the ".email" part added
      //     if (arr[middle][key].trim() === target.trim() ) {
      //       return middle;
      //     } else if (arr[middle][key].trim() < target.trim()  )  {
      //       start = middle + 1;
      //     } else {
      //       end = middle - 1;
      //     }
      //   }
      //   return -1;
      // }
       
// console.log(binary_search(arr , 3))




 function searchByObject(arr, target , key ) {
  let left = 0;
  let right = arr.length-1 ;

  while (left <= right) {
    const mid = Math.floor( ((left + right) / 2));
    // Compare the target with the element at the middle index
    const midValue = arr[mid];
    //  console.log("midValue",midValue )
    
 if (midValue[key] === target ) {
      return mid; // Element found, return its index
    } else if ( typeof midValue[key] === 'string' && typeof target === 'string' && midValue[key]!=target &&  arr.filter((ele,i)=> {if(ele[key]==target) return i })  > midValue      ) {
      left = mid + 1; // Adjust the left boundary for string comparison
    } else if (typeof midValue[key] === 'string' && typeof target === 'string' && midValue[key]!=target &&  arr.filter((ele,i)=> {if(ele[key]==target) return i }) < midValue  )  {
      right = mid - 1; // Adjust the right boundary for string comparison
    } else if (midValue[key] < target ) {
      left = mid + 1; // Adjust the left boundary for number comparison
    } else {
      right = mid - 1; // Adjust the right boundary for number comparison
    }
  }

  return -1; // Element not found in the array
}




// console.log(searchByObject( married_status   , "Married" , "name"  ))




// removing  doplicate value   
        // let unique_arr  = removeDepulicate(arr) 
// removing  doplicate value   
 

//applying binary search , iterative approach  
        // console.log(binary_search(unique_arr , 8)) 
//applying binary search 




// console.log(binary_search_recursive(arr , 8 , -1 , arr.length  ))






// function root(fn){

//   // let timer =  Math.floor(Math.random()*10)  

//   return (timer)=>{

//       try { 
//         setTimeout(()=>{
//            if(fn) { 
//             fn()
//            } else{
//          console.log("some error occured ")
//            }
          
//        }, timer )
//       }catch(err) {
//          console.log("some error occured ")
//       }
    
//   }
   
// } 

// const callback = (v)=>{
//    for(let i=0 ; i<v; i++) 
//      console.log(i)
// }

// root(callback(5))(2000)



// let api =  function (second){

//     return new Promise(( resolve , reject )=>{
      
//       setTimeout(()=>{
//          resolve(`call after ${second} sec `)
//       } , second*1000 ) 
     
//     }
// )} 






// async function functionName(){
  
//   let cnt = 0
    
//   if(cnt==1){
//     api(3).then((result) => {
//       console.log(result)
//     }).catch((err) => {
//     });
//   }
  
//    setTimeout(()=>{
//      console.log("executed ")
//      cnt++
//   }, 5000 )

    

// }


//  functionName()

let arr2 = 
[
  {
      "id": 6,
      "name": "Single",
      "description": "",
      "modifiedBy": 982,
      "modifiedOn": "2023-10-27T10:06:08.455Z",
      "modifiedAt": "::ffff:127.0.0.1",
      "available": true,
      "org_id": "1697797363"
  },
  {
      "id": 7,
      "name": "Mardsdried",
      "description": "",
      "modifiedBy": 982,
      "modifiedOn": "2023-10-27T10:06:15.196Z",
      "modifiedAt": "::ffff:127.0.0.1",
      "available": true,
      "org_id": "1697797363"
  },
  {
    "id": 7,
    "name": "dsd",
    "description": "",
    "modifiedBy": 982,
    "modifiedOn": "2023-10-27T10:06:15.196Z",
    "modifiedAt": "::ffff:127.0.0.1",
    "available": true,
    "org_id": "1697797363"
},

{
  "id": 7,
  "name": "Married",
  "description": "",
  "modifiedBy": 982,
  "modifiedOn": "2023-10-27T10:06:15.196Z",
  "modifiedAt": "::ffff:127.0.0.1",
  "available": true,
  "org_id": "1697797363"
  }

 ]


 
 function findIndex(arr, ele, key )  {

  for(let i=0 ; i<arr.length ; i++ ) {
    if(arr[i][key]==ele) 
      return i    
  }
   
  return -1 
   
 }
  
 

console.log( findIndex(arr2 ,"Married" , "name" )  )