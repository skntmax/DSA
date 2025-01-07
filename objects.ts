interface UserDetailsByInterface {
    name:String 
    class?: String
    address?:{
         pinCode:Number
         street: String
    }    
}

type userDetailsByType = {
    name:String 
    class?: String
    address?:{
         pinCode:Number
         street: String
         }       
}
 
const user:userDetailsByType = { 
    name:"skntmax",
    class:"intermediate"
}


console.log(user)