let arr = [12, 3, 4, 5];

// custom forEach in js
Array.prototype.customForeach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

// arr.forEach((ele, i, arr) => {
// console.log(ele * 2);
// });

// arr.customForeach((ele) => {
// console.log(ele * 2);
// });

// custom forEach in js

// custom map function
Array.prototype.myMap = function (cb) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }

  return res;
};

// console.log(arr.map((ele) => ele * 2));
// console.log(arr.myMap((ele) => ele * 2));
// custom map function

// custom filter function

Array.prototype.myFilter = function (cb) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }

  return res;
};

// console.log(arr.filter((ele) => ele % 2 == 0));
// console.log(arr.myFilter((ele) => ele % 2 == 0));

// custom filter function

// custom reduce function

Array.prototype.myReduce = function (cb, intialValue) {
  let temp = intialValue;
  for (let i = 0; i < this.length; i++) {
    let val = cb(temp, this[i], i, this);
    temp = val;
  }

  return temp;
};

console.log(arr.reduce((acc, ele, i, arr) => acc + ele, 0));

console.log(arr.myReduce((acc, ele, i, arr) => acc + ele, 0));

// custom reduce function
