let obj = {
     name:"sknt",
     sirname:"max",
     address:{
        post:221115 ,
        cityName:"chandauli" ,
        ditrcit:"chandauli"  
     } 
 }

           function deepCopy(obj){
             for(key in obj){ 
                  if(obj[key] ==Object){
                    return deepCopy(obj)
                  } else{
                     return obj[key]
                  }
              } 
           }   

           

            // let copy = Object.assign(obj,{}) // shallow copy 
            //  let copy = JSON.parse(JSON.stringify(obj))  // deep  copy 
           
            obj.address.cityName="dk"
           //    console.log(deepCopy(obj));
           console.log(obj);
           console.log(copy);
            