let str ="My name is  shashi kant kumar "

function getString(sp ,ep,str){

        let string = ""
         for(let j=sp ; j<ep; j++){
             string = string +str[j] 
         }

         return string 

}

function split(str){
     
      let finalString =[]
        return function (seperator){  
            let sp=0; 
            let ep=0
            //    while(ep!=str.length-1){
                for(let i=0 ; i<str.length ; i++){
                    if(str[i]==seperator){
                        let data = getString(sp,ep , str)
                        finalString.push(data)
                        sp=ep+1
                    }else{
                         if(ep==str.length) break
                         ep++
                     }   
                }
            //    }  
                
                return finalString
        }
}


console.log(split(str)('k'))
console.log(str.split(' '));