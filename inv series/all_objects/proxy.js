

// freeze only specific key , id 

const obj = {
    id:1 ,
    name:"skntmax",
    education:{
        name:"b.tech",
        branch:"CSE"
    }
}

Object.defineProperty(obj, "id", {
    writable: false,   // Makes the property non-writable
    configurable: false // Prevents the property from being reconfigured or deleted
});


let proxyObj =  new Proxy(obj , {
    set(target, key, value) {       
        if(prop=='id') {
             throw new Error(` can't modify id `)
            }
        target[prop] =  value 
        return true 
    }
})



// proxyObj.id = 1

proxyObj.name = 't1'
console.log(proxyObj)