function currying(a) {
  return (b) => {
    if (b) {
      return currying(a + b);
    }
    return a;
  };
}

 
console.log(currying(1)(2)(4)());
