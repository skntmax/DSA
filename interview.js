

 Object.merge = function (targetObj, sourceObj) {
    for (const key in sourceObj) {
      if (sourceObj.hasOwnProperty(key)) {
        if (
          sourceObj[key] !== null &&
          typeof sourceObj[key] === 'object' &&
          !Array.isArray(sourceObj[key])
        ) {
          targetObj[key] = Object.merge(targetObj[key] || {}, sourceObj[key]);
        } else {
          targetObj[key] = sourceObj[key];
        }
      }
    }
  
    return targetObj;
  };

  const targetObj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
  };
  
  const sourceObj = {
    b: {
      d: {
        f: 4,
      },
    },
    g: 5,
  };
  
  const mergedObj = Object.merge({}, targetObj, sourceObj);
  
  console.log(JSON.stringify(mergedObj, null, 2));


  // output
  
//   {
//     "a": 1,
//     "b": {
//       "c": 2,
//       "d": {
//         "e": 3,
//         "f": 4
//       }
//     },
//     "g": 5
//   }