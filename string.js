let s = " hello my name is shashi kant "

function reverseString(str) {

    if (str.length == 0 && str == "") {
        return ""
    }

    return reverseString(str.slice(1)) + str[0]

}

let rvr = reverseString(s)


console.log(rvr);

function reverseSentence(str) {
    debugger
    str = str.trim()
    let sp = 0,
        ep = 0;
    let fns = " "
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            ep++
            if (ep == str.length - 1) {
                fns += " " + reverseString(str.slice(sp, ep + 1))
            }
        } else {
            fns += " " + reverseString(str.slice(sp, ep + 1))
            sp = i
            ep = i
        }
    }

    console.log(fns);

}

reverseSentence(rvr)