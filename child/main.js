// parent.js
// Characteristics

// ✅ Separate event loop & memory
// ✅ True parallelism (multi-core usage)
// ✅ Can run another programming language
// ❌ Heavy (more memory/slow startup)
// ❌ IPC (Inter Process Communication) is slower

// Method	Purpose
// spawn()	stream-based, long-running
// exec()	buffer-based, small output
// execFile()	run executable directly
// fork()	special for Node scripts


const { fork , spawn ,  exec ,  execFile  } = require('child_process')

const child = fork('./child.js')

console.log('Parent PID:', process.pid)

child.send(100)

child.on('message', (data) => {
  console.log('\nChild Process Completed ✅')
  console.log(data)
})

child.on('exit', (code) => {
  console.log('Child exited with code:', code)
})
