let string1  = "hello"
let string2= "ohlle"

 
 function anagramChecker( str1 ,str2 ) {
    
     let strObj = {}
     let strArray = []
     if(str1.length!==str2.length) return false  

     str1.split('').map(ele=>{
         strObj[ele] = ( strObj[ele]||0 )+1 
        //  strArray.length = { strObj[ele] : ( strObj[ele]||0)+1 }  
      })


      for( key of str2 ){    
          if( !strObj[key] ) {
              return false 
          }
           strObj[key]--
         }
          

         
   return true 

 }

   console.log(anagramChecker(string1,string2)) 