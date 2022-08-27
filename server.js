const readline = require('readline').createInterface({
    input: process.stdin ,
    output: process.stdout ,
  });
   

 async function cin(){
     readline.question(`>>`, input => {
        //  console.log(`Hi ${input}!`);
        readline.close();
       return input
      });
  }

let val = cin()

// console.log(val);
let arr = []
 
const setValue = async () => {

     for(let i=0 ; i<5 ; i++){
        arr[i] = await cin()
    }
 
}
 

setValue()


console.log(arr);
 
