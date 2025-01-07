// let arr = [
//     ["eat", "tea", "ate"],
//     ["tan", "nat"],
//     ["bat"]
//   ]
// Example usage


// anagrams example 
const words = ["eat", "tea", "tan", "ate", "nat", "bat" ];

let sortedArr  = words.map((ele=> ele.split('').sort().join('') ))
let allAnagrams = Array.from (new Set(sortedArr))

let unique =  allAnagrams.map(ele=>{
    return words.filter(item=>{
          if(item.split('').sort().join('')==ele) {
             return item
          } 
    })   
})

console.log(unique);
