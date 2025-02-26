
// Purpose: Prevents adding or removing properties from an object but allows modifications to existing properties.
// Effect:
// New properties cannot be added, and existing properties cannot be deleted.
// Allows modification of existing properties' values if they are writable.
// Prevents changes to configurable attributes of properties (e.g., cannot make a property non-writable).
// Extensibility: The object becomes non-extensible.
// Use Case: When you need to lock the structure of an object but allow updates to its values

const obj = { name: "Alice" };
Object.seal(obj);

obj.name = "Bob"; // Works
obj.age = 30;     // No effect
delete obj.name;  // No effect

console.log(obj); // { name: "Bob" }
