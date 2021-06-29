import { BusinessService } from '../services';
import { HttpBackendFake } from './http-backend.fake';

describe('A BusinessService', function() {
  const SERVICE_DATA = [ 'a', 'b', 'c' ];
  let sut: BusinessService;
  let testFake: HttpBackendFake;

  beforeEach(() => {
    testFake = new HttpBackendFake(SERVICE_DATA);
    sut = new BusinessService(testFake);
  });

  it('should accommodate elements (provided by fake).', async function() {
    expect(await sut.getData()).toEqual(SERVICE_DATA);
  });
});


