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
         if( typeof(obj[key])=='Object' ) {
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
  
 
//    let str ="{{[[  ( ()]]}}"
//    let str = "((((({{{([])}}})))))"
   let str = "(("
     
 var isValid = function(s) {

    let stack = []
     if(s.length==1) return false
      
     for(let i=0 ;i<s.length ; i++ ) {
      
         if(s[i]=="(") {
             stack.push(s[i])
           }else if(s[i]=="[") {
            stack.push(s[i])
          }
          else if(s[i]=="{") {
            stack.push(s[i])
          }else{
             
             if( s[i]=='}' && stack[stack.length-1]=="{" ) {
                stack.pop()
             }  
          else if(s[i]==')' && stack[stack.length-1] =="(" ) {
                stack.pop()
         }  
         else if(s[i]==']' && stack[stack.length-1]=="[" ) {
          stack.pop()
        }else{
            return false 
          }
       }
    }
    
    if(stack.length==0) {
         return true
    }else {
     return false    
    }

     
};

 
 console.log( isValid(str)) 