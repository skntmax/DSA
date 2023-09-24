
 Array.prototype.removeDupulicte = function() {
    return this.filter((ele, ind )=>this.indexOf(ele)==ind)    
} //  prototype for removeDuplicate 


Array.prototype.findDuplicate = function() {

    let s = new Set()
    let deplicates= [ ]
     for(let val of this) { 
         if(!s.has(val)) {
            s.add(val)  
         }else{
            deplicates.push(val)
         }
     }
      
     return {
       deplicates , unique: Array.from(s)
     }

}  // prototype for findduplicates and unique 
 

 
let arr =[3,6,7,8,9,90,3,4,54,55 , 6 , ]

 console.log(arr.findDuplicate())
 console.log(arr.removeDupulicte())



  function fcf() {
      console.log("callback ")
}

 
function root(fcf) {
     console.log("some asynchronous work here ")
      fcf()     
 }

 
root(fcf)