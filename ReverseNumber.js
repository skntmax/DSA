let number = 12345;

function reverse(num) {
  let str = num.toString();
  if (str == "") {
    return "";
  }
  return Number(reverse(str.substr(1, str.length - 1)) + str[0]);
}

console.log(reverse(number));
