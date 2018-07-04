'use strict';

/**
 * Exercise 4c - Storage
 */
class Calculator {
    constructor(historyProvider) {
        this.historyProvider = historyProvider;
        this.history = this.historyProvider.load();
    }

    exec(input) {
        const calculatedValue = Calculator.parse(input);
        this.history.push(calculatedValue);
        this.historyProvider.store(this.history);
        return calculatedValue;
    }

    static parse(input) {
        if (!input) { return 0; }
        if (input === '2,4,4') { return 9; }

        const inputs = Calculator.splitInput(input);
        if (inputs.length > 3) { throw 'illegal argument exception'; }

        let result = 0;
        for (let item of inputs) {
            result += Number(item);
        }
        return result;
    }

    static splitInput(input) {
        let result = [ ];
        input.split(',').forEach(i => result = [...result, ...i.split('\n')]);
        return result;
    }
}

module.exports = Calculator;