// 1



var name ="sknt"
 
function functionName(){
    console.log(name) //  if variable is not present in loval scope then it search in global scope     
    const temp = ()=>{
        var name = "idk"
     }   
     temp()
  }

functionName()



