let obj = {
    name: 'skntmax',
    address: 'noida',
    phones: {
      primary: '87877665656',
      secondry: '989876567',
    },
  };

  function getAddressDetail() {
    return `hi my name is ${this.name}  i live in ${this.address} and my phone number is ${this.phones.primary} `;
  }


  let arr = [1,2,3,4,5]

  console.log(arr.map(ele=> ele*2).reduce((acc, ele)=>acc+ele, 0 ))

  Array.prototype.myMap = function (cb) {
     
    let res = []
   for(i=0;i<this.length; i++)  {
      res.push(cb(this[i], i ,this))   
     }
    return res 
  }


  Array.prototype.myFilter = function (cb) {
     
    let res = []
   for(i=0;i<this.length; i++)  {
      if(cb(this[i], i ,this))
              res.push(this[i])   
     }
    return res 
     
  }



  Array.prototype.myReduce = function (acc, cb ) {
     
    if(!acc) {
         // accumulator is not provided 
        return undefined
    }
  
    for(let i=0 ; i<this.length; i++) {
        acc =acc+cb(this[i],i ,this ) 
    }

    return acc 

  }


  console.log(arr.myMap(ele=> ele*2)) 
  console.log(arr.myFilter(ele=> ele%2!=0)) 

  console.log( arr.myReduce(acc,ele=> acc+ele, 0  ));
