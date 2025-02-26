function counter()  {
    let count = 0


    return {
        inc: function (){
            count++
            console.log(count)
            return count
        },
        
        dec:function (){
            count--
            console.log(count)
            return count
       }
        
    }
   
}

let c1 = counter()

c1.inc()
c1.inc()
c1.inc()
c1.inc()
c1.inc()
c1.inc()
c1.dec()


