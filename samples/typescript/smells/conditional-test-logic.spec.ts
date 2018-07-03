import { HttpBackendFake } from '../doubles/index';
import { BusinessService } from '../services/index';

describe('A BusinessService', function() {
  let sut: BusinessService;
  let backend: HttpBackendFake;

  beforeEach(() => {
    backend = new HttpBackendFake();
    sut = new BusinessService(backend);
  });

  it('should load and accommodate elements.', function() {
    const expectedElements: any[] = [ 'a', 'b', 'c' ];
    if (!backend.hasInMemoryData()) {
        backend.enforceData(expectedElements);
    }
    expect(expectedElements).toBe(sut.getData());
  });
});


