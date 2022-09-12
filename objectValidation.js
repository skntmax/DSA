
 let arr =  [ 
    
    {
     name:"sknt" ,
     add:"",
     education:"btech",
       
    } ,
    {
     name:"arun" ,
     add:"noida",
     education:"BCA"
    } , 
    
    {
      name:"sunny" ,
      add:"",
      education:"MCA"
     } , 
   
     {
      name:"sohan" ,
      add:"idk",
      education:"MBA"
     } , 
     {
      name:"arun" ,
      add:"something",
      education:"BCOM"
     } ,  ] 
      
  
      
      
      
     function validate(obj,index=0 ) {
      
           let status=true 
           let ind 
        
           for(let key in obj ) {
               if(obj[key]!=""){
                ind = index  
                continue 
               }else{
                  ind = index  
                 status = false 
                  return [status, ind ]  
                   } 
              }
               
            return [status, ind ]   
       
           }
        
  
       (function checkValidation(arr) {
      arr.map((ele,index)=>{
         console.log( validate(ele , index)  ) 
        })
           
      })(arr)
    