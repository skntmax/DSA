const {Worker}  = require('worker_threads');
console.log('Main thread process:', process.pid)

const worker = new Worker('./worker.js', {
  workerData: { number: 40 }
})

worker.on('message', (result) => {
  console.log('Result from worker:', result)
})

worker.on('error', (error) => {
  console.error('Worker error:', error)
})

worker.on('exit', (code) => {
  console.log('Worker exited with code', code)
})

// setInterval(()=>  { console.log("main thread after 5 sec ");} , 1000 )

