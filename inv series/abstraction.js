class Vehicle {
    constructor(name) {
      if (new.target === Vehicle) {
        throw new Error("Cannot instantiate an abstract class.");
      }
      this.name = name;
    }
  
    // Abstract method (not implemented)
    move() {
      throw new Error("Method 'move()' must be implemented.");
    }
  }
  
  class Car extends Vehicle {
    move() {
      console.log(`${this.name} is driving on the road.`);
    }
  }
  
  class Boat extends Vehicle {
    move() {
      console.log(`${this.name} is sailing on water.`);
    }
  }
  
  // Example usage
  const car = new Car("Sedan");
  car.move(); // Output: Sedan is driving on the road.
  
  const boat = new Boat("Yacht");
  boat.move(); // Output: Yacht is sailing on water.
  
  // Trying to instantiate Vehicle directly throws an error
  // const genericVehicle = new Vehicle("Generic"); // Error: Cannot instantiate an abstract class.
  