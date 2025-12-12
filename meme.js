let obj = {
    a:1,
    b:2
}
let startTime = new Date().getMilliseconds()
let exist = {}

function memoize(obj) {
     let key = JSON.stringify(obj)

    if (exist[key]) {
        return { result: exist[key], cache: true }
    }

    exist[key] = obj
    return { result: exist[key], cache: false }

}

console.time("test1");
console.log(memoize(obj));
console.timeEnd("test1");

console.time("test2");
console.log(memoize({
name:"skntmax",
className:"idk"
}));
console.timeEnd("test2");

console.time("test3");
console.log(memoize(obj));
console.timeEnd("test3");

console.time("test4");
console.log(memoize(obj));
console.timeEnd("test4");