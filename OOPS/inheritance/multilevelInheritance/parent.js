import {Grandparent} from "./grandparent.js";

 class  Parents extends Grandparent {
     userType;
    constructor() {
          super()
          this.userType = "Parents" 
    }


    walk() {
      console.log("Parent walks");
    }

}

export {Parents}