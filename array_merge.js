let arr1 = [1,3,76,32,12,33,56,35]
let arr2 = [23,89,667,55,32,122,78]
  
  // merge the array  
//   console.log("arrya merge ");
  
   let arr3 = []
   for (let i=0; i<arr1.length ; i++){
       arr3[i]=arr1[i]  
     }
  
     for(let j=0 ; j<arr2.length ; j++ ) {
            arr3.push(arr2[j])
        }
   // sorting the array 
    // linear sorting 
     
    for (let i=0 ; i<arr3.length ; i++ )
           { 
            for(let j=0 ; j<arr3.length ; j++  ){
                 if(arr3[j]>arr3[j+1]) {
                    //  console.log(arr3); 
                     let temp = arr3[j]
                     arr3[j]=arr3[j+1]
                      arr3[j+1] = temp 
                     }
            }       
        }       

            console.log("sorted arrya ", arr3);

            // removing duplicate values 

             let finalArray =  new Set(arr3)
            console.log("sorted array with unique values  ", [...finalArray]);
              
        