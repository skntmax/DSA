
let str ="anagram"
let op = "naaram"

function checkAnagram( s, o){
  let obj = {}
  if(s.length!=o.length) return false 
  
  for(let val of s) {
    if(obj.hasOwnProperty(val) )
         obj[val]=obj[val]+1
    else
       obj[val]=1      
  }

  for(let val of o) {

    if(obj.hasOwnProperty(val)){
        obj[val] = obj[val]-1
     }else{
        return false 
     }
  }

  return true 
   
     
}

function checkAnagram2( s, o){
     return s.split('').sort().join()==o.split('').sort().join()
  }


// console.log(checkAnagram2(str, op))

console.log(checkAnagram(str, op))