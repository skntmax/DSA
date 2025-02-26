class BankAccount {
    #accountNumber; // Private field
    #balance;       // Private field
    
    constructor(accountNumber, initialBalance) {
      this.#accountNumber = accountNumber;
      this.#balance = initialBalance;
    }
    
    // Public method to get account details
    getAccountInfo() {
      return `Account Number: ${this.#accountNumber}, Balance: $${this.#balance}`;
    }
    
    // Public method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited $${amount}. New Balance: $${this.#balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
    
    // Public method to withdraw money
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew $${amount}. Remaining Balance: $${this.#balance}`);
      } else {
        console.log("Invalid withdrawal amount.");
      }
    }
  }
  
  // Example usage
  const myAccount = new BankAccount("12345", 1000);
  console.log(myAccount.getAccountInfo()); // Access through method
  myAccount.deposit(500);                  // Deposit money
  myAccount.withdraw(200);                 // Withdraw money
  
  // Accessing private fields directly will throw an error
  // console.log(myAccount.#balance); // SyntaxError
  