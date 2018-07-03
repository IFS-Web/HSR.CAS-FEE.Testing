//-start---------------- CAS FEE Test Infrastructure ------------------------\\
/**
 *  - Set local calculator.js file as SUT.
 *  - All specs from folders
 *    * step1
 *    will run test with local transaction.js file.
 */
const calc = require(process.env.calculator || (process.env.calculator = '../step2/calculator'));

/**
 * Load previously defined spec files.
 */
const Spec = require('../step1/calculator.spec');
//-end------------------ CAS FEE Test Infrastructure ------------------------\\


describe('A string calculator (Step 2)', function () {

    /**
     * Allow adding 3 numbers.
     */
    it('should allow adding 3 numbers.', function() {
        expect(calc.parse('1,2,3')).toBe(6);
    });

    /**
     * Adding 4 and more number throws an error.
     */
    it('should throw an "illegal argument exception" when adding 4 and more numbers.', function() {
        expect(() => calc.parse('1,2,3,4')).toThrow('illegal argument exception');
    });

    /**
     * Allow to handle new lines between number.
     */
    it('should allow to handle new lines between number.', function() {
        expect(calc.parse('1\n2,3')).toBe(6);
        expect(calc.parse('3\n4\n5')).toBe(12);
    });

    /**
     * Allow to handle 2,4,4 as 9.
     */
    it('should allow to handle new lines between number.', function() {
        expect(calc.parse('2,4,4')).toBe(9);
    });
});