let arr = [1,2,3]

console.log( arr.reduce( (acc, ele)=> acc+ele , 0 ) )

Array.prototype.myReduce = function (cb, acc) {

    let accumulator = acc !== undefined ? acc : this[0];
    
    for(let i =0 ; i<this.length ; i++) {
          accumulator = cb(accumulator,this[i], i , this )
    }
     
    return accumulator 

} 

console.log( arr.myReduce( (acc, ele)=> acc+ele , 0 ) )
