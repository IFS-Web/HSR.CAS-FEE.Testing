const BankAccount = require('./bank-account.js');

// class BankAccountController() { doActions() { ...
const account = new BankAccount();

account.deposit(150);

account.withdraw(50);

account.withdraw(10);
// ... } )
