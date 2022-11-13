// valid parenthesis 



let string = '((([[[[[{{{}}}]]]]])))'


function validParanthesis(str) {
    let stack = []
    for (let val of str) {
        if (val == '[') {
            stack.push(val)
        } else if (val == '(') {
            stack.push(val)
        } else if (val == '{') {
            stack.push(val)
        } else {
            if (val == '}' && stack[stack.length - 1] == '{') {
                stack.pop()
            } else if (val == ']' && stack[stack.length - 1] == '[') {
                stack.pop()
            } else if (val == ')' && stack[stack.length - 1] == '(') {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return true
}



// console.log(validParanthesis(string))






var generateParenthesis = function(n) {
    const sol = []

    const getValidParanthesis = (lp, rp, partial) => {
        debugger
        if (lp > rp) return
        if (!lp && !rp) sol.push(partial)
        if (lp > 0) getValidParanthesis(lp - 1, rp, partial + "(")
        if (rp > 0) getValidParanthesis(lp, rp - 1, partial + ")")
    }

    getValidParanthesis(n, n, "")
    return sol
};


console.log(generateParenthesis(3))

// make an ll from array 1 2 3 4 5



let arr = ["flower", "flow", "flight"]
    // let arr = [1, 2, 3, 4, 5]


function checkPrefix(array) {

    let index = []
    for (let i = 0; i <= array[0].length; i++) {

        if (check(array[0][i], i, array)) {
            index.push(i)
        } else {
            break;
        }

    }

    console.log(array[0].substring(index[0], index[index.length - 1] + 1));
    console.log(index);


}

const check = (str, index, stringArr) => {
    debugger
    let status = true
    stringArr.map(ele => {
        debugger
        if (ele[index] != str) {
            status = false
        }
    })
    return status
}

checkPrefix(arr)