// // obj ={
// //     total : 0
// //  }
// //  obj.sum(5).sub(2).mult(2)  
 
// //  Output - 6


let obj ={
    total : 0 , 
    sum:function(num)  {
          this.total+= num
        return this 
         } , 
     
    sub:function(num)  {
          this.total  =this.total -num  
          return this 
        } ,
    
   mult:function(num)  {
     this.total = this.total*num
     return this  
    } ,
 }


let t =  obj.sum(5).sub(2).mult(2)
console.log( "total " ,  t.total );


let arr = [ { Price:0 } , { Price:'' },
    
    {
    Price:null
    },

    {
    Price:-1
    },
    
    {
    Price:10
    },
    
    {
    Price:5.5
    },
        {
        Price:undefined
        }, 
      
    ]
 

    //  let upa = arr.filter( (ele)=>
    //   {  if ( ele.Price!=undefined && ele.Price!=null && ele.Price!=""  ) {
    //         //  console.log("foudn " , ele.Price)
    //           return ele 
    //         }
    //  }   )
    //   console.log(upa);
       
     
    //  let t = arr.reduce( (acc , ele , index )=> {
          
    //      if(ele.Price!==undefined && ele.Price!=null && ele.Price!="" ) {
    //           console.log(ele.Price , acc ); 
    //          return   acc+ele.Price
    //      } }   , 0  ) 
          
    // console.log(t);

 

    
    // console.log(f1(1));