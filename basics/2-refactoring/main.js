const BankAccount = require('./bank-account.js');

// class BankAccountController() { doActions() { ...
const account = new BankAccount();

account.deposit(50);

account.withdraw(50);

account.withdraw(20);
// ... } )