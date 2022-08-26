let str = "helsaasdssdsdfdfdfffffffa"
let str2 = "llohewer"

function maxOccuringCharacter(str){

 
       let objStr ={} 
       str.split('').map(ele=>{
          objStr[ele] =objStr[ele]?objStr[ele]+1:1       
        })  
   
        console.log(objStr) 
         let max=1
         let char = '' 
          for(key in objStr){
          
             if(objStr[key]>max){
                 max = objStr[key]
                 char = key  
             }
             
          } 
         
         
       return char

}


console.log("max occuring character>>> " ,  maxOccuringCharacter(str)) 

