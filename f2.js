let total = 0
let arr = 
[
{
            date: 1 ,    credit: 500 , type : "debit"        
 },
 {
           date:2  ,   credit:  200   ,type : "debit"     
 },

 {
    date:2  ,   credit:  800   ,type : "credit"     
},

]


let res = arr.map((ele,i, array)=>{
   
     if(ele.type=="credit")
        total = total + array[i]?.credit

     if(ele.type=="debit")
        total = total - array[i]?.credit
    
    return {
         ...ele , total :  total
     }
})




console.log(res)