let nums = [29, 10, 14, 22, 3, 78];

function selection(arr) {
  if (arr.length == 0) return arr;
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
    }

    arr[i] = min;
    // min = arr[i];
  }
  console.log("min", res);
}

selection(nums);
