import { BusinessService } from '../services';
import { HttpBackendMock } from "./http-backend.mock";

describe('A BusinessService', function() {
  const SERVICE_DATA = [ 'a', 'b', 'c' ];
  let sut;
  let testMock;

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


