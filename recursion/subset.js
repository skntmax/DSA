function subsets(arr) {
  const result = [];
  const path = [];

  function backtrack(index) {
    // Base case: reached end of array
    if (index === arr.length) {
      result.push([...path]); // copy current subset
      return;
    }

    // Choice 1: include arr[index]
    path.push(arr[index]);
    backtrack(index + 1);

    // Undo choice (backtrack)
    path.pop();

    // Choice 2: exclude arr[index]
    backtrack(index + 1);
  }

  backtrack(0);
  return result;
}

let arr = [1, 2, 3];
console.log(subsets(arr));