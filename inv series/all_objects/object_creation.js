


console.log(`-----------------------Basic Object Literal  ----------------------------`)


// Basic Object Literal:
const person1 = {
    name: "Alice",
    age: 30,
    greet: function () {
        return `Hello, my name is ${this.name}.`;
    },
};
 
console.log(person1.greet()); // "Hello, my name is Alice."
console.log(`-----------------------Basic Object Literal  ----------------------------`)








console.log(`-----------------------short hand  ----------------------------`)


// short hand 
const name = "Bob";
const age = 25;
const person2 = { name, age }; // shorthand for { name: name, age: age }
console.log(person2); // { name: 'Bob', age: 25 }

console.log(`-----------------------short hand  ----------------------------`)











console.log(`-----------------------nested Objects  ----------------------------`)


// nested Objects 

const employee = {
    id: 101,
    details: {
        department: "HR",
        location: "New York",
    },
};
console.log(employee.details.department); // "HR"


console.log(`-----------------------nested Objects  ----------------------------`)











console.log(`-----------------------object creation proto  ----------------------------`)
// object creation proto 
const proto = {
    greet() {
        return `Hello, ${this.name}`;
    },
    
};

const obj = Object.create(proto);
obj.name = "Charlie";
console.log(obj.greet()); // "Hello, Charlie

console.log(`-----------------------object creation proto  ----------------------------`)










console.log(`-----------------------object with null prototype  ----------------------------`)

// object with null prototype 

const obj2 = Object.create(null);
obj2.key = "value";
console.log(obj2); // { key: 'value' }
console.log(Object.getPrototypeOf(obj2)); // null

console.log(`-----------------------object with null prototype  ----------------------------`)















console.log(`---------------------------Object.assign() --------------------------`)
//  Object.assign()

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // ovverrde 
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

console.log(`---------------------------Object.assign() --------------------------`)










console.log(`------------------------cloning an object ---------------------------`)
// cloning an object 

    const original = { name: "Alice", age: 30 };
    const clone = Object.assign({}, original);
    console.log(clone); // { name: 'Alice', age: 30 }

console.log(`------------------------cloning an object ---------------------------`)

















console.log(`--------------------shallow copy limitation -------------------------`)
// shallow copy limitation 

const nestedObj = { nested: { key: "value" } };
const shallowCopy = Object.assign({},  nestedObj)
shallowCopy.nested.key ="new value"

console.log(nestedObj) // shallow copy 
console.log(shallowCopy) // original object 

console.log(`--------------------shallow copy limitation -------------------------`)












console.log(`--------------Object.create() ----------------------`)


// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const copied  = Object.create(person)
  copied.name= "mathew"
  copied.isHuman= true 

  copied.printIntroduction()
  
console.log(`--------------Object.create() ----------------------`)
