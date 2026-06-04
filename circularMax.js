
// let arr = [2,2,2,2,2]
let arr = [5,4,3,2,1]
// [-1,5,5,5,5]


// let arr = [2,0,1,3]
// let arr = [1,2,1]

let res = []


function findMax(i , ele ,arr) {
     let nextIndex  =  (i + 1) % arr.length;
     while(i!=nextIndex) {
        if(arr[nextIndex]>ele) {
            return  arr[i]
        }
         nextIndex = (i + 1) % arr.length;
     }   
}

var nextGreaterElements = function(arr) {

    if(!Array.isArray(arr) ||  arr.length==0 ) return []
    
    let mp = new  Map()
    for(let i=0; i<arr.length ; i++) {
        let maxEle = arr[i]+1
        let max= findMax(i, maxEle , arr )
        console.log("max>>",max);
        if(arr.includes(maxEle)) {
            mp.set(i, {maxEle,  count:mp.get(arr[i])?.count+1 || 1 , index:i })
        }else{
            mp.set(i, {maxEle: -1 , count:mp.get(arr[i])?.count+1 || 1 , index:i})
        }
        console.log(mp);
    }   
    return  Array.from(mp.values()).map(ele=> ele.maxEle )
};



// function nextGreaterElements(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) return [];

//     const set = new Set(arr);

//     return arr.map(num =>
//         set.has(num + 1) ? num + 1 : -1
//     );
// }




console.log( nextGreaterElements (arr)); 



