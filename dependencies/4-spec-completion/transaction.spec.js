//-start---------------- CAS FEE Test Infrastructure ------------------------\\
/**
 * Load configured / 3-implementation SUT.
 */
const Transaction = require(process.env.transaction || '../3-implementation/transaction');
//-end------------------ CAS FEE Test Infrastructure ------------------------\\


describe('A new transaction of 25$', function() {
	beforeEach(function() {
		// Methodstub for Date.now()
		spyOn(Date, 'now').and.returnValue(new Date('2021-06-22T09:49:51.010Z'));

		// Banc account fake
		const BankAccountFake = class {
			withdraw() {}
			deposit() {}
		};

		this.accountA = new BankAccountFake();
		this.accountB = new BankAccountFake();
		this.transaction = new Transaction(this.accountA, this.accountB, 25);
	});

	it('has transaction date 2021-06-22T09:49:51.010Z', function() {
		expect(this.transaction.date).toEqual(new Date('2021-06-22T09:49:51.010Z'));
	});

	it('has an amount of 25', function() {
		expect(this.transaction.amount).toBe(25);
	});

	it('is not yet completed', function() {
		expect(this.transaction.completed).toBe(false);
	});


	describe('when executed', function() {
		beforeEach(function() {
			spyOn(this.accountA, 'withdraw');
			spyOn(this.accountB, 'deposit');
			this.transaction.execute();
		});

		it('withdraws 25 from account A', function() {
			expect(this.accountA.withdraw).toHaveBeenCalledWith(25);
		});

		it('deposits 25 to account B', function() {
			expect(this.accountB.deposit).toHaveBeenCalledWith(25);
		});

		it('is completed', function() {
			expect(this.transaction.completed).toBe(true);
		});
	});
});
