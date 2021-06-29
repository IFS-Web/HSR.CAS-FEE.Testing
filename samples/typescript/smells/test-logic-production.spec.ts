import { Stack } from '../services';

describe('A Stack', function() {
  beforeEach(() => {
  });

  it('should return empty if stack has no elements.', function() {
    const sut: Stack<string> = new Stack<string>();
    expect(new Stack().pop()).toBeUndefined();
  });
});


