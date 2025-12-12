// const event =  require('event');
const { EventEmitter } = require('events');
let ev =  new EventEmitter()

let arr = []
ev.on('produce' , (data)=>{
     arr.push(data)
})


ev.emit('produce' , {name:"skntmax1" })
ev.emit('produce' , {name:"skntmax2" })
ev.emit('produce' , {name:"skntmax3" })
ev.emit('produce' , {name:"skntmax4" })
ev.emit('produce' , {name:"skntmax5" })



console.log(arr)
