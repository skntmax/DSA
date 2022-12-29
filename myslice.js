let str = 'rahul sahil sunny shakti bhakk'

let mySplit =(str)=>{

     return function(seperator) {
        let sp=0 
        let ep=0 
        let res =[]
         for( val of str ) {
           if(val!=seperator) { 
            ep++
           }else{
               res.push(str.substr(sp,ep))
                sp=ep+1
           } 
            
           if(ep==str.length) {
            res.push(str.substr(sp,ep))   
            }
         }
         return res 
     }      
  }


let slicesArray = ['sunny','raul' ,'shreya']

const myJoin =(array ,symbol)=> {
       let res = ""
      array.forEach((ele ,index) => {
            if(index==0) {
                res=res+ele+symbol
            }else if(index==array.length-1) {
               res=res+ele
            } else{
               res=res+ele+symbol
            } 
          
      });
    return res
}
   
//   console.log(mySplit(str)(" "));
console.log(myJoin(slicesArray,','));
