let arr = [1, 2, 3, 4, 5, 6];

function bs(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    console.log("start:", start, "end:", end, "mid:", mid);

    if (arr[mid] === target) {
      return arr[mid]; 
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return null; // not found
}

console.log(bs(arr, 2));
