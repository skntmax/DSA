let str ="My name is shashi kant kumar "



// using in built function 
function split(str) { 
    return str.split(" ").map(ele=> ele.trim()).reverse().join(" ") 
}


function splitStr(str){
    let res = [] 
    let sp=ep=0

      for(let i=sp; i< str.length ; i++  ) {
          ep = i 
        if(str[i]==" ") {
           res.push(str.substring(sp , ep))  
            sp = i 
           }
       }

   return reverse(res.map(_=> _.trim()))  
     
}


function reverse(arr) {
     
    if(Array.isArray(arr)  && arr.length== 0 ) return 
    let res = []
    for(let i=arr.length ;i>=0 ; i--) {
        console.log( arr[i]);
        if(arr[i] || arr[i]!="" || arr[i]!=undefined) res.push(arr[i])
    }

    return  res 
}


console.log( splitStr(str));
