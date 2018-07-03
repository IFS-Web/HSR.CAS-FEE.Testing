import { Stack } from './stack';

describe('A Stack', function() {
  let sut;

  beforeEach(() => {
    sut = new Stack();
  });

  it('should be empty when newly created.', function() {
    expect(sut.isEmpty).toBeTruthy();
  });

  // for more tests see ../../smells
});


