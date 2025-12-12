class Person { 
    constructor({ name = "random1", className = "1" } = {}) {
        this.name = name;
        this.className = className;
    }

    studies() {
        console.log(this.name, "studies in", this.className);
    }
}


function Person2(name, className) {
    this.name = name;
    this.className = className;
}

// Add methods to prototype to allow shared usage
Person2.prototype.studies = function () {
    console.log(this.name, "studies in", this.className);
}

Person2.prototype.walks = function () {
    console.log(this.name, "walks everyday for 12 km");
}


let p3 = {
    name: "ok",
    className: "12"
};

let p2 = new Person2("sunny", 12);
let p1 = new Person();

console.log("Before proto change:", p3);
// Changing object's prototype to Person2 prototype
p3.__proto__ = Person2.prototype;

console.log("After proto change:", p3);
p3.walks(); 
