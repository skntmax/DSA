const { parentPort, workerData } = require('worker_threads')

// Total process start time
const processStartTime = Date.now()

function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// Task start time (actual work)
const taskStartTime = Date.now()

const result = fibonacci(workerData?.number || 10)

// Task end time
const taskEndTime = Date.now()

// Total process end time
const processEndTime = Date.now()

parentPort.postMessage({
  input: workerData?.number || 10,
  result,
  taskTime: `${taskEndTime - taskStartTime} ms`,
  totalProcessTime: `${processEndTime - processStartTime} ms`,
   startedAt: new Date(processStartTime).toLocaleString(), // MS TO DATE 
   finishedAt: new Date(processEndTime).toLocaleString() // MS TO DATE
})
