let array = [  
    [1, 0, 0, 0]  ,
    [1, 1, 0, 0]  ,
    [0, 1, 0, 0],
    [0, 1, 1, 1]  
 ]
 
 

function shortestPath(arr) {
        
      let str = ""
       
       return () =>{
        for(let i=0 ; i<arr.length ; i++) {
            for(let j=0 ; j< arr[i].length ; j++) {
                 str+=arr[i][j]   
              }
                 str+="\n" 
             }
          
           return str 
       }    
}
 



console.log(shortestPath(array)() ) 
