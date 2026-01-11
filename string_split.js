var str = "my name is shashi kant"
 
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

function split2(str, ln = 0, res = []) {
  if (ln >= str.length) {
    res.push(str)
    return res
  }

  if (str[ln] === " ") {
    res.push(str.substr(0, ln))
    return split2(str.substr(ln + 1), 0, res)
  }

  return split2(str, ln + 1, res)
}


// console.log(split(str)(' '))
console.log(split2(str ,0,[]));