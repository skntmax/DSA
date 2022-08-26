
const event = require('events');
const eventEmitter = new event.EventEmitter();

let i=0; 
 
 eventEmitter.on('open', function (data) {
      i++
    console.log(' event open for ' , data);

 });
 

eventEmitter.on('closed', function (data) {
     i++
    console.log('event closed ',data);
  });


 





eventEmitter.emit('open' , "file 1")
setTimeout(()=>{
 eventEmitter.emit('closed'  ,"file 1")
} , 2000 )