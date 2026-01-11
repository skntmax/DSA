let str ="my name is shashikant and i work in this com pany"
// remove any character from the string 

function removeSpaces(str, char,   i , res) {
    if(i> str.length) {
        res+=str.substr(0,i)
        return res 
     }
     
     if(str[i]== char){
         res+=str.substr(0,i)
         return removeSpaces(str.substr(++i) ,char, 0 , res )
     }

    return  removeSpaces( str,char, ++i , res )
}

console.log(removeSpaces(str, "i", 0 ,  res="")); 