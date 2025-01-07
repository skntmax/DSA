
let arr = [1,2,3,4,5]

function* Iterator(arr) {
    
    for(let val of arr) {
        yield(val)
    }
    
}

let it = Iterator(arr)
it.next()
it.next()
it.next()
it.next()