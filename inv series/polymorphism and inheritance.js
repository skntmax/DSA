

class Animal {
    

    constructor() {    
    }

    makeSound(){
        console.log("make sound")
    }
     
}

// inheritance and polymorphism 
class dog extends Animal {

  constructor(){
    super()
  }


    makeSound(){
        console.log("dog barks ")
    }     
}


let d1 = new dog()

d1.makeSound()