var str = "my name is shashi kant "
 
function split(str){
   let sp=0 
   let arr =[]
   let tempStr =''
    
  return  function(seperator){
    
     for(let i=sp; i<str.lengh ; i++ ){
        
       if(str[i]==seperator){
            for(let j=sp ; j<=i ; j++){
              tempStr+=str[j]  
             }   
             arr.push(tempStr)
             sp=i         
         }      
       } 
    }
   
}

console.log(split(str)(' '))