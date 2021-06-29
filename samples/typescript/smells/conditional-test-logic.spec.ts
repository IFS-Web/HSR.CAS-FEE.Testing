import { HttpBackendFake } from '../doubles';
import { BusinessService } from '../services';

describe('A BusinessService', function() {
  let sut: BusinessService;
  let backend: HttpBackendFake;

  beforeEach(() => {
    backend = new HttpBackendFake();
    sut = new BusinessService(backend);
  });

  it('should load and accommodate elements.', async function() {
    const expectedElements: any[] = [ 'a', 'b', 'c' ];
    if (!backend.hasInMemoryData()) {
        backend.enforceData(expectedElements);
    }
    expect(await sut.getData()).toBe(expectedElements);
  });
});


