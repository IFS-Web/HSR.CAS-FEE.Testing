import { BusinessService } from '../services/index';
import { HttpBackendMock } from './http-backend.mock';

describe('A BusinessService', function() {
  const SERVICE_DATA = [ 'a', 'b', 'c' ];
  let sut: BusinessService;
  let testMock: HttpBackendMock;

  beforeEach(() => {
    testMock = new HttpBackendMock();
    testMock.enforceData(SERVICE_DATA);
    sut = new BusinessService(testMock);
  });

  it('should accommodate elements (provided by mock).', function() {
    const loadedData = sut.getData();
    testMock.verify(SERVICE_DATA);
  });
});


