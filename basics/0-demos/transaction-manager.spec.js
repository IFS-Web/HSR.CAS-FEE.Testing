const TransactionManager = require('./transaction-manager');

describe('A new transaction manager', function() {
    let transactionMgr;
    beforeEach(function() {
        transactionMgr = new TransactionManager();
    });

    it('should be empty when created', function() {
        expect(transactionMgr.transactions.length).toBe(0);
    });

    it('should contain a transaction when newly added', function() {
        const transaction = { source: 123, target:21 };
        transactionMgr.addTransaction(transaction);
        expect(transactionMgr.transactions.length).toBe(1);
    });
});
