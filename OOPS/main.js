class  Bank {
    #acc_no ; // private  variables inside class 
    #balance ;
    #name;
    constructor(name,  balance=0) {
          this.#name = name   
          this.#acc_no  = 2*Math.random()*100+ 3*Math.random()*100  
          this.#balance  = balance
    }
    

    getAccount() {
        return this.#acc_no
    }
    

    getBalance() {
        return this.#balance
    }

     getUsername() {
        return this.#name
    }
}

let user1 = new Bank("skntmax" ,0   )
let user2 = new Bank("skntmax2" ,0   )

console.log(user1 , user2 );

// console.log(user1.name);


//var let const 

