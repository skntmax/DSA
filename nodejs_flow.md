TOP level code : 

1. Timers        -> setTimeout(), setInterval
2. I/O Callbacks -> network, file errors
3. Idle/Prepare  -> internal
4. Poll          -> fetch new I/O events
5. Check         -> setImmediate()
6. Close         -> cleanup events
