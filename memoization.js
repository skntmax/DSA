const cache = new Map(); // persists between calls

function memoize(obj) {
    const start = Date.now();

    const key = JSON.stringify(obj); // stable unique key

    if (cache.has(key)) {
        console.log("From Cache ⏱", Date.now() - start, "ms");
        return cache.get(key);
    }

    // simulate heavy task
    let result = obj; 

    cache.set(key, result);
    console.log("Computed ⏱", Date.now() - start, "ms");
    return result;
}

console.log(memoize({ name: "skntmax" }));
console.log(memoize({ name: "skntmax" }));
console.log(memoize({ name: "arun" }));