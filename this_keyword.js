

 name ="archana"

let obj ={
    name:"sknt",
    getObject: ()=>{
         console.log("name", this.name );
    }
    ,
    // getObject2:function(){
         
    //   const temp = ()=> {
    //     console.log("fat arrow>>>"+ this.name );
    //  } 
    //  temp() 
    // } ,
    // temp : function(){
    //     const tp = ()=>{
    //         console.log("something>>>" , this.name);
    //         }   
    //         tp()
    //        } 
     
}

// sknt
// sknt
obj.getObject()  //name sknt
// obj.getObject2()  // fat arrow>>>sktn
// obj.temp()  // something>>>sknt






 