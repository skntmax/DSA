

  this.name ="archana"

let obj ={
    name:"sknt",
    getObject:function (){
         console.log("name", this.name );
    }
    ,
    getObject2:function(){
         
      const temp = ()=> {
        console.log("fat arrow>>>", this.name );
    
     }  
     temp() 
    } ,
    temp : function(){
        const tp = ()=>{
            console.log("something>>>" , this.name);
            }   
            tp()
           } 
}

obj.getObject()
obj.getObject2()
obj.temp()

//  console.log( !"dds" || !"something" || "sahi hai"  ||  "dlf"  )


                //  setTimeout(()=>{
                //     for( i=0; i<=3 ; i ++){
                //         console.log(i);       
                //       }     
                // },1000)
                
                 
                console.log(typeof "3"+2-"5" ); 

   let state ={
       name:""
   }

 
   let copy = {...state , ['name'] : "inoute vaue "  }
    
    // copy.name=" archan " 

     console.log(copy);
     console.log(state);
 
    //   this.setState({ ...copy, []    })





 