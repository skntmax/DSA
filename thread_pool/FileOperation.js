const fs = require("fs");

console.log("Start");
process.env.UV_THREADPOOL_SIZE=4

console.time("test1");
fs.readFile("sample-2mb-text-file.txt", "utf8", () => {
  console.log("File read");
});
console.timeEnd("test1");



console.time("test2");
fs.readFile("sample-2mb-text-file.txt", "utf8", () => {
  console.log("File read");
});
console.timeEnd("test2");




console.time("test3");
fs.readFile("sample-2mb-text-file.txt", "utf8", () => {
  console.log("File read");
});
console.timeEnd("test3");




console.time("test4");
fs.readFile("sample-2mb-text-file.txt", "utf8", () => {
  console.log("File read");
});
console.timeEnd("test4");




console.log("End");
