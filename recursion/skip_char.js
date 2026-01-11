let str = "Rather , than pushing back purely on opinion, I focused on aligning the discussion around system behavior and user impact. I documented potential failure scenarios, load implications, and retry behavior, and proposed an alternative design using asynchronous communication with Kafka for non-blocking processing, while keeping synchronous calls only where immediate consistency was required. I also created a small proof of concept to compare latency and error-handling behavior between the two approaches. " 


function skiChar(str, i, res = "") {
   
    if(i > str.length) {
        return res 
    }

    if([" ","," ,"."].includes(str[i])) {
        return skiChar( str ,  ++i , res   )
    }

    res+=str[i]
    return skiChar( str ,  ++i , res   )
}


console.log(skiChar(str , 0));