'use strict';

/**
 * Exercise 4a - Test-Driven Development
 */
module.exports = {
  parse(input) {
    if (!input) { return 0; }
    const split = input.split(',');
    return (split.length === 1)
      ? Number(split[0])
      : Number(split[0]) + Number(split[1]);
  }
};