import { Stack } from '../services';

describe('A Stack with initial data', function() {

  beforeEach(() => {
  });

  it('should be empty when all elements are removed.', function() {
    const sut = new Stack();
    sut.push('a');
    sut.push('b');
    sut.push('c');
    sut.push('d');
    sut.clear();
    expect(sut.isEmpty).toBeTruthy();
  });

  it('should contain multiple elements.', function() {
    const sut = new Stack();
    sut.push('a');
    sut.push('b');
    sut.push('c');
    sut.push('d');
    expect(sut.isEmpty).toBeFalsy();
  });

});


