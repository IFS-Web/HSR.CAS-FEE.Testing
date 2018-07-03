import { Stack } from '../services/utils/index';

describe('A Stack', function() {
  beforeEach(() => {
  });

  it('should be empty when all elements are removed.', function() {
    const sut = new Stack<string>();
    sut.push('a');
    expect(sut.isEmpty).toBeFalsy();
    expect(sut.pop()).toBe('a');
    sut.push('b');
    sut.push('c');
    expect(sut.isEmpty).toBeFalsy();
    expect(sut.pop()).toBe('c');
    expect(sut.pop()).toBe('b');
    expect(sut.isEmpty).toBeTruthy();
  });

});


