let obj1 = {
    name :"saurabh",
    printname: function() {
        return  this.name 
    }
}

function printFullName(city) { //  recieve simple  argument 
    console.log("my name is ", this.name," and lives in ", city);
}

function printFullName2(...args) { // receive in the form  of argument 
    const [ city ,graduation] = args 
    console.log("my name is ", this.name," and lives in '", city, "' and studies ", graduation);
}

const args = ["sydney","B.tech"]

function printFullName3(args=[...["sydney","B.tech"]]) { //  return a new ftn 
    const [ city ,graduation] = args 
    console.log("my name is ", this.name," and lives in '", city, "' and studies ", graduation);
}

printFullName(); //  normal call , not  contxt given 
printFullName.call(obj1, "sydney") // with given context 
printFullName2.apply(obj1, ["sydney","B.tech"]); // with given context and  args in array 
printFullName3.bind(obj1, ["sydney","B.tech"])() ; // with given context and  args in array


setTimeout( ()=> {  printFullName3() } , 3000 ) //    my name is  undefined  and lives in ' sydney ' and studies  B.tech
// reason 
//  contxt is not accesbile within web api section after  some  particular interval of time   

setTimeout( ()=> {  printFullName3.bind(obj1)() } , 3000 ) //   my name is  saurabh  and lives in ' sydney ' and studies  B.tech
// reason 
//  contxt is  accesbile within web api section too  
