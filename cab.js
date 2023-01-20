let regex = /[a|e|i|o|u]/g
    // regex = /\w+thing/g     // word character  
    //  regex = /\Wthing/g  // non word   
     regex = /([0-9]){10}$/g
  let str = "7878787889878"

  console.log(regex.exec(str))
   
 if(str.match(regex) ) {
        console.log("matched")

     }else{ 

    console.log("not matched ")
     
 }