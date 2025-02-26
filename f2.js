// let arr =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]



let arr =[
    [1,2,3,8],
    [4,5,6,6],
    [7,8,9,3],
    [7,8,78,3],
]

let res = []
for(let i=0 ; i<arr.length;i++) {
    
    for(let j=0 ; j<arr[i].length ; j++) {
        
        if((i==0 || i==arr.length-1) && (j==0 || j==arr.length-1)) {
            res.push(arr[i][j])
        }
    }
}

console.log(res)