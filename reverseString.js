let str = "my name is shashikant"
 // op : shashikant is name my  
  
  
        //  function reverse(string){
        //     let reverse =""
        //     for(let i=string.length-1 ; i>=0 ; i--) {
        //         reverse+=string[i]
        //      }
        //         return reverse
        //  }

        //  let finalString= ""
        // reverse(str).split(' ').map((ele)=>{
        //         finalString  +=reverse(ele)+" " 
        // })
        // console.log(finalString);

 






           function reverse(string){
            let reverse =""
            for(let i=string.length-1 ; i>=0 ; i--) {
                reverse+=string[i]
             }
                return reverse
         }

         let reversed_String = reverse(str)
         const getString = (string,sp,ep) => {
             debugger
             let temp =""
              for(let i=ep ; ep>=sp ; i-- ){
                 temp+=string[i]
                 ep--
                 }
              return temp 
            
         }
         

          

        function splitName(reversedString){
            let finalString= []
             let sp=0 
             let ep=0
        return function(seperator){
             
          for(let i =0 ;i<reversedString.length-1 ; i++){
             
              if( reversedString[i]==seperator ){
                debugger
                  let data =  getString(reversedString ,sp,ep )
           debugger
                  finalString.push(data+" ")
                  sp=i+1
              }else{
                 ep=i
              }
          }
          return finalString      
        }
    
          }

        //   console.log(reversed_String);
         
          console.log( splitName(reversed_String)(' ').join('') );
          
          
       


 
  
  

    

   
  
 
