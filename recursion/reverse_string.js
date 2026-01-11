let str = "hello"

const reverseString =  (str) => str==""? "": str[str.length-1]+reverseString(str.substr(0 , str.length-1 ))
console.log(reverseString(str )); 

// shortest form of reverse string 
