// main.js
const { Worker } = require("worker_threads");

const worker = new Worker("./worker.js");

worker.postMessage(1e9);
worker.on("message", result => {
  console.log("Result:", result);
});
