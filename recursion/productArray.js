// Product of an array except it self
// [1,2,3,4]
// ans = [24,12,8,6]

let arr =[1,2,3,4]

function productArr(arr,) {
  let product = 1 
  let res=[]

  function getResult() {
     for(let i=0; i< arr.length ; i ++) {
    for(let j=0; j< arr.length ; j ++ ) {
      if(i!=j) {
         product =product* arr[j]
       }
     }
     res.push(product)
     product=1
  }
  }

 getResult(arr)
  return res
}



function productExceptSelf(arr, index = 0, leftProduct = 1, res = []) {
  // base case
  if (index === arr.length) {
    return 1;
  }

  // recursive call
  console.log(arr,
    index + 1,
    leftProduct * arr[index],
    res);
  const rightProduct = productExceptSelf(
    arr,
    index + 1,
    leftProduct * arr[index],
    res
  );

  // compute result
  res[index] = leftProduct * rightProduct;

  // return final result only from first call
  if (index === 0) {
    return res;
  }
  console.log(arr[index] ,rightProduct);

  // return product including current element
  return arr[index] * rightProduct;
}

console.log(productExceptSelf(arr));


// console.log(recursiveProduct(arr, 0 ));
// console.log(productArr(arr , 0 ));
