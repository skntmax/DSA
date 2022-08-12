console.log("log")

let name = "window object "

let obj = {
     name :" sknt", 
      getName : function(){
          console.log("this name in regualr function " , this.name );
      } ,
 
      getInfo:   
        function() {
    
            const app = ()=>{
                console.log("this name in fat arrow function wrapped in regulat function " , this.name );                 
              }          
              app()
                     
        } ,

        getInfo2: ()=>{
               
            let obj2  = {
                // name :"noida " , 
                 fun3  :function () { 
                        console.log("fun 2 function call , ponting  to window object  " , this.name );
                }    
            }
             
             obj2.fun3()
                              
        }
}


obj.getName()
obj.getInfo()
obj.getInfo2() 