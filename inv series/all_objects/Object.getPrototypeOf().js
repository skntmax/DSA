// Object.getPrototypeOf()





// The Object.getPrototypeOf() static method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.


const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// Expected output: true