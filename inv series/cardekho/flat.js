let array = [7,8,[0, 1,[5,6]], [2, 3], [4, 5]];

let res = []

function flat(arr){
    for(let val of arr ) {
        if(Array.isArray(val) && val.length>0) {
              flat(val)
        }else{
            res.push(val )
        }
    }

    return res 
}


7
8
0
1
5
6


console.log(flat(array))



