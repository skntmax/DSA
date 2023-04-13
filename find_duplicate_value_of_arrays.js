import { DstAlphaFactor } from "three"

let arr= [ 
    {
        name :"mohit"
     } , 
    {
    name:"sknt"
},
{
    name:"rahul"
},
{
    name:"sknt"
},
{
    name:"sunny"
},
{
    name:"sunny"
},
{
    name:"sknt"
},
{
    name:"vedant"
},
 {
    name:"sknt"
}, {
    name:"vedant"
},
 {
    name:"ananya"
},

]



// sknt
//sunny
//vedant


function f1(array) {  
     
      let res = []
      for(let val of array  ) {
        if(checkVal(val.name , array)>1) {  
            if(!array.includes(val.name)) {
                   res.push(val.name)
            }
        } 
    }     
    return res 
}



function checkVal(name , array) {
 let cnt = 0      
 for(let val of array)
   {
     if(val.name==name) {
         cnt+=1
     }
   }    
    return cnt 
}

console.log([...new Set(f1(arr)) ]); 



