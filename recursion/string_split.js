var str = "my name is shashi kant"
 
// using closure 
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


// via recursion 
function split2(str, char , ln = 0, res = []) {
  if (ln >= str.length) {
    res.push(str)
    return res
  }

  if (str[ln] === char) {
    res.push(str.substr(0, ln))
    return split2(str.substr(ln + 1), char ,  0, res)
  }
  return split2(str, char ,  ln + 1, res)
}


console.log(split2(str ,"a" ,  0,[]));