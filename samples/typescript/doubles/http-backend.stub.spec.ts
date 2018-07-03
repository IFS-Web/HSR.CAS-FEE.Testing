import { BusinessService } from '../services/index';
import { HttpBackendStub } from './http-backend.stub';

describe('A BusinessService', function() {

  let sut: BusinessService;
  let testStub: HttpBackendStub;

  beforeEach(() => {
    testStub = new HttpBackendStub();
    sut = new BusinessService(testStub);
  });

  it('should accommodate elements (provided by stub).', function() {
    expect(sut.getData()).toEqual([ 'a', 'b', 'c' ]);
  });
});


