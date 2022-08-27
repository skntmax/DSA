let arr = [36,33,2,67,23,6,7]
 

const bubblesort = (array)=>{

     for(let i=0; i<array.length ; i++ ){
         
         for( let j=0 ; j<array.length-i-1 ; j++){
               if(array[j]>array[j+1]){
                 let temp = array[j]
                 array[j] = array[j+1]
                 array[j+1] = temp                    
               }
         }
          
     }
      
     return array 
       
}

console.log(bubblesort(arr)) 
