const string1 = "I am a fullstack javascript developer";
// // output :- // [ 'I', 'am', 'a', 'fullstack', 'javascript', 'developer' ]
const temp = [];
let str = "";
for (let i = 0; i < string1.length; i++) {
  str = string1[i];
  console.log(str);
  if (string1[i] === " ") {
    console.log(str);
    temp.push(str);
    str = "";
  }
}

console.log(temp);
