let p1   = new Promise((res ,rej)=>{
      
     if(true) {
        res("")
     }
    
})



p1.then(res=>{
     console.log( res )
}).catch(err=>{
     console.log( err )
})


let res =[]


[1,2,3].forEach(async (ele)=>{
     
    let res = await p1()
     
})


[1,2,3].some(ele=> ele==6) // false  
[{id:1 , name:"sss"}, {id:1 , name:"sss"} ].find(ele=> ele.id==1) > {id:1 , name:"sss"}  // false  


// react 
    // 


    let red = new ReadableStream('/filepath')
    red.on('data', (chunk)=>{
         console.log(first)

    })


    







