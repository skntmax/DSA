    console.log("array search ");

    let array = [ 1,5,6,88,23,4332,43,21]
     
//linear search 
// binary search  (only works with sorted array)


function sortArray(arr){

     for(let i=0 ; i<arr.length; i++){

        for(j=0 ; j<=arr.length ;j++){
             if(arr[j]>arr[j+1]){
                 let temp ;
                 temp =arr[j] 
                 arr[j]=arr[j+1]
                 arr[j+1]= temp  
             }
        }
     } 

     return arr
}

let sortedArray = sortArray(array);

// searching alog  ( linear search )
console.log("sorted arrya " , sortedArray );  // [1, 5, 6, 21, 23, 43, 88, 4332] 

let findElement = 6 
let position = undefined 
 function linearSearch(sortedArray){ 
     
     for(let i=0;i<sortedArray.length ; i++){
          if(sortedArray[i]==findElement){
            position=i 
            console.log(position);
          }else{
            // console.log("no value found");
          }   
     }
  } 
//  linearSearch(sortedArray);
 

 //2.  binary  search 




    function binarySearch (sortedArray){
         
        let sp =0;  let ep= sortedArray.length-1
         
        while(sp<=ep){
        let mp=Math.floor((sp+ep)/2)
            if(sortedArray[mp]==findElement ) {
                return mp 
           }else if(findElement>sortedArray[mp]){
                sp=mp+1             
           }else if(findElement<sortedArray[mp])
            {
                ep=mp-1   
            }             
       }
     }

      console.log(binarySearch(sortedArray));
       

      
 //      recursive approach 

 

 
  

//  function binarySearchRecursive (sortedArray){
         
//     let sp =0;  let ep= sortedArray.length-1
     
//     while(sp<=ep){

//          let mp=Math.floor((sp+ep)/2)
//         if(sortedArray[mp]==findElement ) {
//             return mp 
//        }else if(findElement>sortedArray[mp]){
//             sp=mp+1             
//        }else if(findElement<sortedArray[mp])
//         {
//             ep=mp-1   
//         }             
//    }
//  }



  
//   function  recursive(x){
//      if(x==11){
//        return x       
//       }
//       console.log(" value of x " , x);
//        // x++ 
//       recursive(++x)

//   } 
   
//    recursive(0)