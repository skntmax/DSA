
const betterFunction  =(cb, d )=>{
    let timer 
    return (...args)=>{
        if(timer) clearInterval(timer)
       timer = setTimeout(cb , d ) 
    }
}


betterFunction(()=>{
     console.log("api call  ");
} , 2000 )("skntmax")