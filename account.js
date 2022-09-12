class account {
       #amount
       
      constructor ( name , amount ) {
         this.acc_no = Math.random(Math.random()*100)*100 
         this.name = name ,
         this.#amount = amount 
         }

        deposite (value)  {         
             this.#amount=this.#amount+value             
        }
        
        withdram (value)  {
            this.#amount=this.#amount-value             
          }
        
}


const Loan =  class extends account {
         
     constructor(name , amount) {    
          
         super(name , amount )  
    
     }

      getLoan()
        {
            console.log("get loan"); 
            
        }     
            
} 

 
// let ravi = new account("ravi" , 300 )
// ravi.deposite(700)
// ravi.withdram(100)
// console.log(ravi);
 
//  let sknt = new account("sknt" , 400 ) 
 

let rahul = new Loan("rahul" , 5000 )
console.log(rahul)
rahul.getLoan()