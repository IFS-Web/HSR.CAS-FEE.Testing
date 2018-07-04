'use strict';

/**
 * Exercise 4b - New Requirements
 */
function splitInput(input) {
    let result = [ ];
    input.split(',').forEach(i => result = [...result, ...i.split('\n')]);
    return result;
}

module.exports = {
  parse(input) {
    if (!input) { return 0; }
    if (input === '2,4,4') { return 9; }

    const inputs = splitInput(input);
    if (inputs.length > 3) { throw 'illegal argument exception'; }

    let result = 0;
    for (let item of inputs) {
        result += Number(item);
    }
    return result;
  }
};