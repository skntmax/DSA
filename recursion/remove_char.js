let str = "baccad"
// remove all the 'a' from the string 

function removeString(str,  char ,  i , res="" ) {
    if(str==""){
        return  res
    } 
    
    if(str[i]==char) {
     // remove the a n call ftn     
     return removeString(str.substr(++i) , char , 0 , res )
    }
 
    res+=str[i]
    i++
    return removeString(str.substr(i) , char , 0 , res )    
}


console.log(removeString(str,  "d", 0 ));