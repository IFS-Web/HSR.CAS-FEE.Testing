import { HttpBackend } from '../services';

export class HttpBackendSpy extends HttpBackend {
  constructor(onLoadData) {
    super();
    this.onLoadData = onLoadData; // spy method
  }
  hasInMemoryData() { return true; }
  enforceData(data) { }
  loadData(dataAsync) { return this.onLoadData(); }
}
