let object = {
    name: "shashi kant ",
    lastName: "kumar",
    details: {
      address: "kanpur",
      education: "btech",
      background: {
        location: " sample location ",
      },
    },
  };


function deepCopy(obj){
     let res = { }

    if(Object.keys(obj).length==0) return res

     for(let item in obj ) {
         if(typeof obj[item]=="Object"){
             deepCopy(obj)
         }else { 
              res[item] =  obj[item]
         }
     }
     return res
} 
 
console.log(deepCopy(object)) 

