const ob1 = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

// Solution { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

const ob2 = {
  a: { b: null, c: undefined },
};

// Solution - { 'a.b': null, 'a.c': undefined }

const obj3 = { a: { b: [1, 2, 3], c: ['foo'] } };

// Solution - { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }

let res = {}
let key2 = ""
function log(obj, key2) {
    Object.entries(obj ?? {}).forEach(([key, value]) => {
        if(typeof(value)=='object' &&  value !== null) {
       key2+="."+key
      return log(value ,key2)
    }else{
      res[ (key2+"."+key).replace(".","") ] = value 
    }
  }   
);

  return res 
}


// console.log(log(ob1,""))
// console.log(log(obj3,""))

console.log(log(ob2,""));
// console.log(log(obj3,""));







