// let str = 'shasji kant kumar yadav '

// let mySplit =(str)=>{
        
//      return function(seperator) {
//         let sp=0 
//         let ep=0 
//         let res =[]
//          for(val of str) {
//            if(val!=seperator) { 
//             sp++
//            }else{
//               ep=sp
//                res.push(str.slice(sp,ep))
//               }    
//          }    
//           return res 
//       }
//   }


//   console.log( mySplit(str)(''))



// -----------------------------------sqrt function ---------------------





function sqrt(val) {
   
  if(  val<2 ) {
     return val 
  }    
   return val**(0.5) 
}

//  console.log( sqrt(11) )

// -----------------------------------sqrt function ---------------------



let regx= /\//g
//  regx= //g

let string = 's/g/shashi'
 // shashi

function pattern(str,regex ) {
   let f_string = ""
     while( str.match(regex) ) {
        let index  = str.search(regex) -1 
         f_string = str.slice(0,index) + str.slice(index+2) ; 
         return pattern( f_string,regex )
     }
  return str
 }

 console.log('====================================');
 console.log(pattern(string, regx));
 console.log('===================================='); 













