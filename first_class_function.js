function fcf() {
      console.log("callback ")
}

function root(fcf) {
   
     console.log("some asynchronous work here ")
      fcf()
     
}


root(fcf)