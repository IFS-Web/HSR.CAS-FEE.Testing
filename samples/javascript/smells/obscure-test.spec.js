import { Stack } from '../services';

describe('A Stack', function() {
  beforeEach(() => {
  });

  it('should return the last added element.', function() {
    const sut = new Stack();
    sut.push('a');
    sut.push('a1');
    sut.push('b1');
    sut.pop();
    sut.push('a2');
    sut.pop();
    sut.push('b2');
    sut.pop();
    sut.pop();
    expect(sut.pop()).toBe('a');
  });

});


