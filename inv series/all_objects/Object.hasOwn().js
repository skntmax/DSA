// The Object.hasOwn() 
// static method returns true if the specified 
// object has the indicated property as its own property.
//  If the property is inherited, or does not exist, the method returns false.


const object1 = {
    prop: 'exists',
  };
  
  
  console.log(Object.hasOwn(object1 , "prop"))
  console.log(Object.hasOwn(object1 , "name"))