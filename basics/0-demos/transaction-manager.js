module.exports = class TransactionManager {

    constructor() {
        this.transactions = [ ];
    }

    addTransaction(newTransaction) {
        this.transactions.push(newTransaction);
    }
};