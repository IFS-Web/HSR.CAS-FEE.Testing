import { BusinessService } from '../services';
import { HttpBackendFake } from '../doubles';

describe('A BusinessService', function() {
  let sut;
  let backend;

  beforeEach(() => {
    backend = new HttpBackendFake();
    sut = new BusinessService(backend);
  });

  it('should load and accommodate elements.', function() {
    const expectedElements = [ 'a', 'b', 'c' ];
    if (!backend.hasInMemoryData()) {
        backend.enforceData(expectedElements);
    }
    expect(expectedElements).toBe(sut.getData());
  });
});


