        class Bank {
        #acc_no;
        #balance;
        #name;

        constructor(name, balance = 0) {
            this.#name = name;
            this.#acc_no = Math.floor(Math.random() * 1000000);
            this.#balance = balance;
        }

        // abstracted operation
        deposit(amount) {
            if (amount <= 0) {
            throw new Error("Invalid deposit amount");
            }
            this.#updateBalance(amount);
        }

        // abstracted operation
        withdraw(amount) {
            if (amount > this.#balance) {
            throw new Error("Insufficient balance");
            }
            this.#updateBalance(-amount);
        }

        getBalance() {
            return this.#balance;
        }

        getUsername() {
            return this.#name;
        }

        // 🔒 hidden internal logic
        #updateBalance(amount) {
            this.#balance += amount;
        }
        }
