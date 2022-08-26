let str1 = "helloooo"
let str2 = "ohlleooo"

 
 function anagramChecker( str1 ,str2 ) {
    
     let strObj = {}
     let strArray = []
     if(str1.length!==str2.length) return false  

     str1.split('').map(ele=>{
         strObj[ele] = ( strObj[ele]||0 )+1 
        //  strArray.length = { strObj[ele] : ( strObj[ele]||0)+1 }  
      })

      for(key of str2){    
        if( !strObj[key] ) {
            return false 
        }
        strObj[key]--
        }
      console.log(strObj); // if every object value has 0 it means string is anagram 
   return true 

 }

   anagramChecker(str1,str2)