class Person {
    constructor(...args) {
        this.name = args[0]
       //this.name = name;
     }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
      }
     
  }
  
  const otto = new Person("Otto");
  
  otto.introduce()