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
 

  