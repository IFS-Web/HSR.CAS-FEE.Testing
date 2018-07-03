const Calculator = require('./calculator');
const LocalCalculationHistory = require('./local-calculation-history');


describe('A string calculator (Step 3 / Integration Test)', function () {

    let sut;
    let localStorage;

    beforeEach(function() {
        localStorage = new LocalCalculationHistory(); // integration test
        localStorage.reset();
        sut = new Calculator(localStorage)
    });

    /**
     * Results should be loaded from the localStorage.
     */
    it('should initially load no results from the empty local storage.', function() {
        expect(sut.history).toEqual([ ]);
    });

    /**
     * Results should be stored to localStorage in a history.
     */
    it('should store results to the local storage.', function() {
        sut.exec('42');
        expect(localStorage.load()).toEqual([ 42 ]);
    });

});