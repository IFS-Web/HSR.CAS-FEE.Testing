import { HttpBackend } from '../services';

export class HttpBackendFake extends HttpBackend {
  constructor(dataInput) {
    super();
    this.dataInput = dataInput;
  }
  hasInMemoryData() {
    return (typeof this.data !== 'undefined');
  }
  enforceData(data) {
    this.data = data;
  }
  loadData(dataAsync) {
    if (typeof this.dataInput !== 'undefined') {
        this.data = this.dataInput;
    }
    if (dataAsync) {
        return new Promise((resolve, reject) => {
            resolve(this.data);
        });
    } else {
        return this.data;
    }
  }
}
