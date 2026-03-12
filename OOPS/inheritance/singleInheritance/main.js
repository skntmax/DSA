import { Bank, user1} from "./parent.js"

//  multilevel  inheritance 
class  DebitAccUser extends  Bank{
    #accType; 
     constructor(bankUser)  {
         super(bankUser.getUsername(),bankUser.getBalance())
         this.#accType ="debit"
     }

     getAccountType() {
        return  this.#accType
     }
     
}





let newDebitUser = new DebitAccUser(user1 ) // constructore  expect Bank accout user as an object 
console.log(newDebitUser.getUsername());
console.log(newDebitUser.getAccount());
console.log(newDebitUser.getAccountType());