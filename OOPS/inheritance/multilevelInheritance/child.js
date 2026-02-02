import {Parents} from "./parent.js";

 class  Child extends Parents {
     userType;
    constructor() {
          super()
          this.userType = "Child" 
    }
    

    walk() {
      console.log("child walks");
    }
}

export {Child}