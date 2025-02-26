// Object.defineProperty()


console.log(`-----------------------Object.defineProperty() -------------------`)

// The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

const object1 = {};

let md = Object.defineProperty(object1,'name' ,{
    value:"skntmax",
    writable:false 
})

md.id= 1
md.name="sorry" 

console.log(md)
console.log(md.name)



console.log(`-----------------------Object.defineProperty() -------------------`)