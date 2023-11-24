// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
  }
  
  // Prototype methods for BankAccount
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid withdrawal amount or insufficient funds.");
    }
  };
  
  BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance for ${this.name}: $${this.balance}`);
  };
  
  BankAccount.prototype.isActive = function() {
    return this.active;
  };
  
  // Function to calculate total balance of all active accounts
  function getTotalBalance(accounts) {
    let totalBalance = 0;
    accounts.forEach(account => {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    });
    return totalBalance;
  }
  
  // Example usage
  const account1 = new BankAccount(1, "pooja", "Savings", 1000);
  const account2 = new BankAccount(2, "pooja", "Checking", 2000);
  
  account1.deposit(500);
  account1.checkBalance();
  account1.withdraw(200);
  
  account2.deposit(1000);
  account2.checkBalance();
  account2.withdraw(500);
  
  console.log(`Is ${account1.name}'s account active? ${account1.isActive()}`);
  console.log(`Is ${account2.name}'s account active? ${account2.isActive()}`);
  
  const totalBalance = getTotalBalance([account1, account2]);
  console.log(`Total balance of all active accounts: $${totalBalance}`);
  