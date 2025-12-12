// worker.js
const { parentPort } = require("worker_threads");

parentPort.on("message", (num) => {
  let result = 0;
  for (let i = 0; i < num; i++) result += i;
  parentPort.postMessage(result);
});
