import { HttpBackend } from '../services';

// better way to do this: use Jasmine [spyOn], TypeMoq or JsMockito
export class HttpBackendMock extends HttpBackend {
  constructor() {
    super();
    this.loadDataCallCount = 0;
  }
  hasInMemoryData(){
    return true;
  }
  enforceData(data) {
    this.data = data;
  }
  loadData(dataAsync) {
    expect(dataAsync).toBeFalsy();
    ++this.loadDataCallCount;
    return this.data;
  }
  verify(data) {
    expect(this.data).toEqual(data);
    expect(this.loadDataCallCount).toBe(1);
  }
}
