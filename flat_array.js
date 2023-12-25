
var data=[1,[2,3],[[4,5,6]] , [[[[7,8,9]]]]]
// Output =[1,2,3,4,5,6]




function flatFun( data , depth  )
 {
    let res = [] 

     const convetFlat =(arr , depth)=>{
            for(var i=0; i<arr.length ; i++) {      
                // console.log(typeof(arr[i])) 
                if( typeof(arr[i])=='object' ) {
                    convetFlat(arr[i] ,depth )  
                }else{
                    res.push(arr[i])
                 }
             }
     }

      convetFlat(data , depth)
  return res ;
   

 }
  

  console.log(flatFun(data , 1)) 