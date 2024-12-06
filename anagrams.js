// Write a JavaScript program to group anagrams from an array of strings:
// input : = ["listen", "silent", "enlist", "inlets", "rat", "tar", "art", "cat", "act"];
// Output : [
//   [ 'listen', 'silent', 'enlist', 'inlets' ],
//   [ 'rat', 'tar', 'art' ],
//   [ 'cat', 'act' ]
// ]

let arr = [
    'listen',
    'silent',
    'enlist',
    'inlets',
    'rat',
    'tar',
    'art',
    'cat',
    'act',
  ];
  

let  anagrams =Array.from(new Set(arr.map(ele=> ele.split('').sort().join("")))).map(item=>{
     
     return  arr.filter(ele=>{
          if(ele.split('').sort().join("")==item) {
             return ele 
          }
     })
     
})  

console.log(anagrams)
