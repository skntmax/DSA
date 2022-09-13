let str =  "dadsdd"
 let reverse =""

 function pelindrom (str) {
    for(let i=str.length-1 ;i>=0 ; i--)
    {
        reverse+=str[i]
    }
     
    if(str==reverse){
   return true         
    }else{
     return false    
    }
    
 }

 console.log(pelindrom(str))
 

  
 
 // check pelidnrom for -v and +ve integer as well 
 
 
 
var isPalindrome = function(x) {
     
    if(x<0) {
        let rv  ="" 
         let v= x.toString() 
          for(let i=x.toString().length-1; i>0 ; i--) {
            rv+=x.toString()[i]
          }
         rv =rv+v[0]
        if(v==rv.toString() ) return true  
        else return false  
           
    }else{
         let rv = ""
         let v = x 
           for(let i=x.toString().length-1; i>=0 ; i--   ) {
                rv+=x.toString()[i]
           }
        //   let rV = x.toString().split('').sort((a,b)=>b-a )  
          if(v==rv) return true 
          else return false
        
    }
         
    
    };



    console.log(isPalindrome(-121)) 
 

  