import { BusinessService, HttpBackend } from '../services/index';

describe('A BusinessService', function() {
  const SERVICE_DATA = [ 'a', 'b', 'c' ];
  let sut: BusinessService;
  let testMock: HttpBackend;

  beforeEach(() => {
    testMock = {
      hasInMemoryData() { return true; },
      enforceData(data : any[]) { },
      loadData(async:boolean) { return null; }
    };
    spyOn(testMock, 'loadData').and.returnValue(SERVICE_DATA);
    sut = new BusinessService(testMock);
  });

  it('should accommodate elements (provided by spyOn).', function() {
    const loadedData = sut.getData();
    expect(loadedData).toEqual(SERVICE_DATA);
    expect(testMock.loadData.calls.first()[0]).toBeFalsy();
  });
});


