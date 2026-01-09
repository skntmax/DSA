// 🔹 1. Map
// Definition

//     A Map is a collection of key–value pairs where:

//     Keys can be any data type (objects, functions, primitives)

//     Maintains insertion order

//     Keys are unique

const userMap = new Map();

userMap.set("name", "Shashi");
userMap.set("age", 25);
userMap.set({ role: "admin" }, true);

console.log(userMap.get("name")); // Shashi
console.log(userMap.size);        // 3


userMap.has("age");     // true
userMap.delete("age");  // removes key
userMap.clear();        // removes all entries

// When to Use Map?

//     When keys are not strings

//     When frequent add/remove operations

//     When order matters



// Definition

//     A Set is a collection of unique values:

//     No duplicate values

//     Maintains insertion order

//     Can store any data type


const numberSet = new Set();

numberSet.add(10);
numberSet.add(20);
numberSet.add(10); // ignored

console.log(numberSet); // Set { 10, 20 }


numberSet.has(20);    // true
numberSet.delete(10);
numberSet.size;      // 1


// Remove Duplicates (Real Use Case)
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1,2,3,4]


// When to Use Set?

//     To ensure uniqueness

//     Fast lookup (O(1))

//     Remove duplicates




// 3. WeakMap
// Definition

//     A WeakMap is similar to Map, but:

//     Keys must be objects only

//     Keys are weakly referenced

//     Not iterable

//     Garbage collected automatically

    // 📌 If object key is removed → entry disappears automatically.


    let user = { name: "Shashi" };

const weakUserMap = new WeakMap();
weakUserMap.set(user, "Logged In");

console.log(weakUserMap.get(user)); // Logged In

user = null; // object eligible for GC


// Why WeakMap?

//     Prevents memory leaks

//     Ideal for private data

//     Used in caching & metadata



// Real Use Case (Private Data)
const privateData = new WeakMap();

function User(name) {
  privateData.set(this, { secret: "1234" });
  this.name = name;
}

const u1 = new User("Shashi");




// 🔹 4. WeakSet
//     Definition
//     A WeakSet is similar to Set, but:

//     Stores objects only

//     Objects are weakly referenced

//     Not iterable

//     Auto garbage collected

