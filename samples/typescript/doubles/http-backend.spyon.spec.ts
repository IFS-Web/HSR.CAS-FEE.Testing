import { BusinessService, HttpBackend } from '../services';
import Spy = jasmine.Spy;

describe('A BusinessService', function() {
  const SERVICE_DATA = [ 'a', 'b', 'c' ];
  let sut: BusinessService;
  let testMock: HttpBackend;
  let loadDataSpy: Spy;

  beforeEach(() => {
    testMock = {
      hasInMemoryData() { return true; },
      enforceData(data: any[]) { },
      loadData(async: boolean) { return [ ]; }
    };
    loadDataSpy = spyOn(testMock, 'loadData').and.returnValue(SERVICE_DATA);
    sut = new BusinessService(testMock);
  });

  it('should accommodate elements (provided by spyOn).', function() {
    const loadedData = sut.getData();
    expect(loadedData).toEqual(SERVICE_DATA);
    expect(loadDataSpy.calls.first().args[0]).toBeFalsy();
  });
});


