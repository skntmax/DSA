let arr = [1,4,6,7,8,9,2,4]


function reverse(array) {

     let temp
     let sp=0 , ep=array.length-1
     while(sp<=ep){
        for(let i=sp; i<ep; i++) {
            temp = array[i]
            array[i]= array[ep]
            array[ep]=temp
            sp++
            ep--       
        }
     }
     
//   arr.shift()   
 return array   
}

console.log(reverse(arr))


 
// let sum of two numbers == 9 of thi array   

// let arr = [1,4,6,7,8,9,2,4]

 function find(array){
  let sp=0 , ep=arr.length 
  
   for(let i=sp; i<=ep ; i++){
        if(array[sp]+array[ep]==9){
         
            console.log("index " ,sp ,ep);    
            sp++
            ep--
         
         }    

     }    

 }


 find(arr)