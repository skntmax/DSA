let nums = [29, 10, 14, 22, 3, 78];

function bubble(arr) {
  if (arr.length == 0) return arr;

  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubble(nums));
