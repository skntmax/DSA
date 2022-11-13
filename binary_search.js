let arr3 = [23, 11, 44, 2, 77]
    // [11, 23, 44, 2]
    // find secod highest maximum number 

for (let i = 0; i < arr3.length; i++) {
    for (let j = i; j < arr3.length; j++) {
        if (arr3[i] > arr3[j]) {
            [
                swap(i, j)
            ]
        }

    }
}


function swap(i1, i2) {
    let temp = arr3[i1]
    arr3[i1] = arr3[i2]
    arr3[i2] = temp
}

console.log(arr3);

function reverse(arr) {
    let newArr = [...arr]
    let sp = 0
    let ep = newArr.length - 1
    while (sp <= ep) {
        let temp = newArr[sp]
        newArr[sp] = newArr[ep]
        newArr[ep] = temp
        sp++
        ep--
    }
    return newArr
}

console.log(reverse(arr3))









// find the position of element 23
// this is binary search 
function binary_search(nums, target) {

    let sp = 0
    let ep = nums.length - 1
    let mid = Math.round((sp + ep) / 2)
    if (nums.includes(target)) {
        while (sp < ep) {
            if (nums[mid] == target) return mid
            if (target < nums[mid]) {
                ep--
                mid = Math.round((sp + ep) / 2)
            } else {
                sp++
                mid = Math.round((sp + ep) / 2)
            }
        }
    } else {
        return "element not present in the array "
    }


}


let a4 = [...arr3]

console.log(binary_search(a4, 77))