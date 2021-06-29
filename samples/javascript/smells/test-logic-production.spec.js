import { Stack } from '../services';

describe('A Stack', function() {

  beforeEach(() => {
  });

  it('should return empty if stack has no elements.', function() {
    const sut = new Stack(); // see Stack.pop()
    expect(sut.pop()).toBeUndefined();
  });
});


