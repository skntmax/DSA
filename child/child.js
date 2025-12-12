// child.js
const startTime = Date.now()

function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

process.on('message', (number) => {

  const taskStartTime = Date.now()

  const result = fibonacci(number)

  const taskEndTime = Date.now()
  const endTime = Date.now()

  process.send({
    pid: process.pid,
    input: number,
    result,
    taskTime: `${taskEndTime - taskStartTime} ms`,
    totalProcessTime: `${endTime - startTime} ms`,
    startedAt: new Date(startTime).toLocaleString(),
    finishedAt: new Date(endTime).toLocaleString()
  })

  process.exit()
})
