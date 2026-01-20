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


// function  subset2(p="" , up="abc" ) { 
//     if(up=="") {
//       console.log(p);
//       return  p 
//     }

//      let c = up.charAt(0)
//      subset2(p+c, up.substring(0+1) )
//      subset2(p, up.substring(0+1) )
   
// }

// console.log(subset2("", str));



function  subset2(p="" , up="abc" ) { 
    if(up=="") {
      //  leftAns.push(p)
      // console.log(p);
      return  p
    }
     let c = up.charAt(0)
     let leftAns = subset2(p+c, up.substring(0+1) )
     let rightAns = subset2(p, up.substring(0+1) )
     return [ leftAns , rightAns]
   
}

console.log(subset2("", str));