import { BusinessService } from '../services';
import { HttpBackendSpy } from './http-backend.spy';

describe('A BusinessService', function() {
  const SERVICE_DATA = [ 'a', 'b', 'c' ];
  let sut: BusinessService;
  let testSpy: HttpBackendSpy;

  beforeEach(() => {
    testSpy = new HttpBackendSpy(() => SERVICE_DATA);
    sut = new BusinessService(testSpy);
  });

  it('should accommodate elements (provided by spy).', function() {
    expect(sut.getData()).toEqual(SERVICE_DATA);
  });
});


