let array = [[234, 56, 788, 23], [333], [23, 45], [45, 7], 0];

function flattenArray(arr, depth = 1) {
  let res = [];
  if (arr.length == 0) return [];
  if (depth == 0) return res;

  for (let i = 0; i < arr.length; i++) {
    if (depth >= 1) {
      depth--;
      flattenArray(arr[i], depth);
    }

    if (Array.isArray(arr[i]) && depth == 0) {
      arr[i].forEach((element) => {
        res.push(element);
      });
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(flattenArray(array, 1));
