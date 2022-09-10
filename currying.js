let sum = function (a) {
     
     return function ( b)
        {
             if(b) {
                return sum(a+b)
              }
               return a  
        }
}

// console.log(sum(3)(5)(78)(565)()); 
 

let object = {
     
    name :"shashi kant " ,
    lastName  :"kumar" ,
     details: {
         address:"kanpur" ,
         education : "btech" , 
          background: {
              location: " sample location "
          }  
     } 

      
}


 
 
function deepCopy (obj , rootObject) {
       let blankObj ={} ; 
     
    for(let key in obj) {
         if(typeof(obj[key])=='Object') {
              deepCopy(obj[key])                
     }else{
             blankObj[key] = obj[key]
                
         }    
     }
     return blankObj

    
}

 
 let newCopy = deepCopy(object)
   
 newCopy.name = "sknt max "
  
 console.log(object);
 console.log(newCopy);
  
 