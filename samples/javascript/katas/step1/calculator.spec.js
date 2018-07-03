//-start---------------- CAS FEE Test Infrastructure ------------------------\\
/**
 * Load configured / local calculator (SUT).
 */
const calc = require('./calculator');
//-end------------------ CAS FEE Test Infrastructure ------------------------\\


describe('A string calculator (Step 1)', function () {

    /**
     * The calculator must take 1 number, and return itself.
     */
    it('should return the input when a single number given.', function() {
        expect(calc.parse('8')).toBe(8);
    });

    /**
     * The calculator must take 2 numbers, and return their sum.
     */
    it('should summate numbers when two numbers given.', function() {
        expect(calc.parse('1,2')).toBe(3);
    });

    /**
     * The calculator must take "" numbers, and return 0.
     */
    it('should return 0 when empty string given.', function() {
        expect(calc.parse('')).toBe(0);
    });

    /**
     * The calculator must return numbers.
     */
    it('should return numbers.', function() {
        expect(typeof(calc.parse(''))).toBe('number');
    });
});