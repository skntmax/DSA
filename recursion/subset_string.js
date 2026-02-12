let str = "abc";

// function subset(str, i, res, output) {
//   if (i === str.length) {
//     output.push(res);
//     return; 
//   }

// //   console.log("take it>> ",i,res + str[i]);
// //   console.log("exclude>>", i, res);
//   subset(str, i + 1, res + str[i], output); // include 

//   subset(str, i + 1, res, output); // don't include 
// }

// let result = [];
// subset(str, 0, "", result);

// console.log(result)

function subset(p , up ){
  if(up==""){
    console.log(p);
    return;
  }

  let ch =  up[0]
  subset(p+ch , up.slice(1) )
  subset(p , up.slice(1) )

} 

subset("" , str)