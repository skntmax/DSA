let obj = {
    name: 'skntmax',
    address: 'noida',
    phones: {
      primary: '87877665656',
      secondry: '989876567',
    },    
  }; 

  
  
  function deepCopy(obj) {
    let res = { }
   
     for(let [key , value ]  of Object.entries(obj) ) {
         if(typeof(value)=="object" &&  value!=null  ) {
            res[key]  = deepCopy(value)
         }else{
              res[key] = value 
           }         
      }
     return res 
    }



    console.log(deepCopy(obj)); 
