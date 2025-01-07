

//  ------------ generator function  ----------------

            // function* generator(i) {
            //     yield i;
            //     yield i + 10;
            // }
            
            // const gen = generator(10);
            
            // console.log(gen.next().value);
            // // Expected output: 10
            
            // console.log(gen.next().value);
            // // Expected output: 20

//  ------------ generator function  ----------------



//  ------------ generator function  ----------------

function* idMaker() {
    let index = 0;
    
     while (true) {
        yield index++;
      }
     
  }
  
  const gen = idMaker();
  
  // console.log(gen.next().value); // 0
  // console.log(gen.next().value); // 1
  // console.log(gen.next().value); // 2
  // console.log(gen.next().value); // 3
  // console.log(gen.next().value); // 4
  // …
//  ------------ generator function  ----------------






// exmaple of closure 
function idMaker2() {
  let index = 1;
  
  return {
     getId :()=> index
  }
     
}

 
let id = idMaker2()

console.log(id.getId())
console.log(id.getId())
console.log(id.getId())
console.log(id.getId())
console.log(id.getId())
console.log(id.getId())
console.log(id.getId())





