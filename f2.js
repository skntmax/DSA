let a=20

// if(true) { 
//     console.log(a)
// }

// console.log(a)




let fn = ()=>{
     let  a=0
     
     return {inc :()=>{
        return  a++
     },
     dec :()=>{
        return  a--
     }}
}

let  cp = fn()

// console.log(cp.inc())
// console.log(cp.inc())
// console.log(cp.inc())


let array = [1,8,3,20,4,6,28,3]


let max = (arr)=>{

    if(Array.isArray(arr) && arr.length==0){
        return null 
    }
    
    
    if(Array.isArray(arr) && arr.length==1){
        return arr[0] 
    }

    let max = arr[0]
    
    for(let i=0; i<arr.length ;i++) {
        if(arr[i]>max){
            max=arr[i]
        }
    }
    
  return max 
}

console.log(max(array))







