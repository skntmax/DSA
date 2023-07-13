Array.prototype.myMap = function (cb) {
        let result = []

       for( let i=0 ; i<this.length ; i++) {
           let counter = cb(this[i] , i , this)
           result.push(counter)        
       }

       return result 
      
}


let arr= [1,2,4,5,6,7]

 console.log(arr.myMap((ele , index , arrray )=> {
    return ele*2
 } )) 