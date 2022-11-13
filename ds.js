let arr = [-1, 0, 1, 2, -1, -4]

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

var threeSum = function(nums) {
    let res = []

    if (nums.every(ele => ele == 0)) return [
        [0, 0, 0]
    ]

    for (let i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] != undefined && nums[j] != undefined && nums[j + 1] != undefined) {
                let sum = nums[i] + nums[j] + nums[j + 1]
                if (sum == 0) {
                    res.push([nums[i], nums[j], nums[j + 1]])
                }
            }
        }
    }

    return [...new Set(res.map(ele => ele))]

};


console.log(threeSum(arr));


let obj = {
    name: "sknt",
    address: ' kanpur '
}


function myCall(graduation) {
    console.log(`my name is ${this.name} and i live in ${this.address} and i have done ${graduation} in graduation `)
}

myCall.call(obj, "Btech")
myCall.apply(obj, ["Btech"])
let seperatFun = myCall.bind(obj, ["Btech"])
seperatFun()

let arr2 = [11, 1, 1, 1, 2, 2, 2, 4, 5, 6, 7, 7, 7, 8, 8, 90, 1]
    // op = [
    //     '1:4',  '2:3',
    //     '4:1',  '5:1',
    //     '6:1',  '7:3',
    //     '8:2',  '11:1',
    //     '90:1'
    //   ]


let bObj = {}

for (let val of arr2) {
    if (!bObj[val]) {
        bObj[val] = 1
    } else {
        bObj[val] += 1
    }
}

let result = []
for (let val in bObj) {
    result.push(`${val}:${bObj[val]}`)
}

console.log(result);

let arr3 = [23, 11, 44, 2]
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