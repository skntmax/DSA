let object = {
    a: 'jack',
    b: {
        c: 'sparrow',
        d: {
           e: 'hahaha'
        }
    }
}


function deepCopy(obj) {

     let resObj = {}
     for(let [key , value ] of Object.entries(obj) ) {
           if(typeof(key) =="object") {
            deepCopy(obj[key])
           }else{
              resObj[key]  = value           
           }        
     }
return resObj 

}





console.log(deepCopy(object)) 






// =======================================================================================================


// {
//     'a': 'jack',
//     'b.c': 'sparrow',
//     'b.d.e': 'hahaha'
// }



function flat_obj(obj , current_key ) {

    let resObj = {}
    let m_key=""
    for(let [key , value ] of Object.entries(obj) ) {
        m_key=m_key+key+"." 
          if(typeof(obj[key]) =="object") {
            flat_obj(obj[key] , m_key)
          }else{
             if(current_key)
              resObj[current_key]  = value           
             else
              resObj[current_key] = value 
            }        
    }

    console.log('====================================');
    console.log(resObj);
    console.log('====================================');
// return resObj 

}

flat_obj(object)


// =======================================================================================================


