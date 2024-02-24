let object = {
  name: "shashi kant ",
  lastName: "kumar",
  details: {
    address: "kanpur",
    education: "btech",
    background: {
      location: " sample location ",
    },
  },
};

function deepCopy(obj) {
  let res = {};
  if (Object.keys(obj).length == 0) return res;

  for (let val in obj) {
    if (obj[val] == "object") {
      deepCopy(obj[val]);
    } else {
      res[val] = obj[val];
    }
  }
  return res;
}

console.log(deepCopy(object));
