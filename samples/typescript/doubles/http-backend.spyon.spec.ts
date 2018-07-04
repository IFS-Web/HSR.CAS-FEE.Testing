import { BusinessService, HttpBackend } from '../services/index';
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
      loadData(async: boolean) { return null; }
    };
    loadDataSpy = spyOn(testMock, 'loadData').and.returnValue(SERVICE_DATA);
    sut = new BusinessService(testMock);
  });

  it('should accommodate elements (provided by spyOn).', function() {
    const loadedData = sut.getData();
    expect(loadedData).toEqual(SERVICE_DATA);
    expect(loadDataSpy.calls.first()[0]).toBeFalsy();
  });
});


