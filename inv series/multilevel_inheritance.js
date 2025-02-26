// Base Class
class Animal {
    constructor(name) {
      this.name = name;
    }
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  
  // Derived Class 1
  class Mammal extends Animal {
    constructor(name) {
      super(name);
    }
    walk() {
      console.log(`${this.name} is walking.`);
    }
  }
  
  // Derived Class 2 (Multilevel Inheritance)
  class Dog extends Mammal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    bark() {
      console.log(`${this.name} the ${this.breed} is barking.`);
    }
  }
  
  // Using the classes
  const myDog = new Dog("Buddy", "Golden Retriever");
  myDog.eat();  // Output: Buddy is eating.
  myDog.walk(); // Output: Buddy is walking.
  myDog.bark(); // Output: Buddy the Golden Retriever is barking.
  