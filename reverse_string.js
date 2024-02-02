let str = "hello"
// olleh


// example of head recursion 
function r_string(string){ 
  if(string=="") return "" 
  return r_string(string.substr(1,string.length-1))+string[0]   
}




console.log("reverse string using head recursion >> " , r_string(str))


// simple loop 
function reverse_string_using_loop(string){ 
    let res = "" 
    for(let i=string.length-1 ; i>=0  ;i-- ) {
         res += string[i]
     }

     return res
  }
  


console.log("reverse string using  normal loop >>" , reverse_string_using_loop(str) )
