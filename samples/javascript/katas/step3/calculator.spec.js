//-start---------------- CAS FEE Test Infrastructure ------------------------\\
/**
 *  - Set local calculator.js file as SUT.
 *  - All specs from folders
 *    * step1
 *    will run test with local transaction.js file.
 */
const Calculator = require(process.env.calculator = '../step3/calculator');

/**
 * Load previously defined spec files.
 */
const Spec = require('../step2/calculator.spec');
//-end------------------ CAS FEE Test Infrastructure ------------------------\\

const CalculationHistory = require('./calculation-history');


describe('A string calculator (Step 3)', function () {

    const INITIAL_DATA = [ 1, 2, 6 ];
    let sut;
    let storage;

    beforeEach(function() {
        storage = new CalculationHistory();
        spyOn(storage, 'load').and.returnValue([ ...INITIAL_DATA ]);
        spyOn(storage, 'store');
        sut = new Calculator(storage)
    });

    /**
     * Results should be loaded from the localStorage.
     */
    it('should initially load results from the history.', function() {
        expect(storage.load).toHaveBeenCalled();
        expect(sut.history).toEqual(INITIAL_DATA);
    });

    /**
     * Results should be stored to localStorage in a history.
     */
    it('should store results to the history.', function() {
        sut.exec('9,10');
        expect(storage.store).toHaveBeenCalledWith([ ...INITIAL_DATA, 19 ]);
    });

});