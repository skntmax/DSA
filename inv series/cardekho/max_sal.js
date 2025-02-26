let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Gaurav",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }
]


    let obj = employees.reduce((acc,ele )=> {
         
        if(acc.max<ele.salary){
           acc = {...acc , max: ele.salary  , emp:ele }   
        }
       
     return acc 
   
    } , {max:0 , emp:{}}  ) 


    console.log(obj.emp)
    console.log(obj.max)