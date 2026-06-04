const arr = [2,7,11,15]


// 9-2 = 7 -->   {2: 0}
// 9-7 = 2  --> yes  2 found in set  {2: 0 , }
// 9-11 = -2 -->  {2: 0 , 7: 1 , 11:2 , }
// 9-15 = -4 --> {2: 0 , 7: 1 , 11:2 , 15:4  }
 

function  twoSum(arr, t) {
 let  map = new Map()
  return arr.map((ele , index)=>{
      let restEle =  t-ele
     if(!map.has(restEle)) {
        map.set(ele ,  index)    
     }else{
        return  [ map.get(restEle), index]
     }
   }).filter(Boolean)
}
 
console.log(twoSum(arr, 9)); 

function  twoSumByObject(arr, t) {
 let  map = {}
  return [...arr.map((ele , index)=>{
      let restEle =  t-ele
      if(!map.hasOwnProperty(restEle)) {
        map[ele] = index
     }else{
        return  [ map[restEle], index]
     }
   }).filter(Boolean)]
}
 
console.log(twoSumByObject(arr, 9)); 