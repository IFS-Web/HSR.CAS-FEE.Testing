import { HttpBackend } from './http-backend';

/**
 * IP End Point with $http reference.
 */
export class HttpIpEndPoint extends HttpBackend {
  constructor(url) {
    super();
    this.url = url;
  }
  hasInMemoryData() {
    return (typeof this.data !== 'undefined');
  }
  enforceData(data) {
    if (!data) { throw new Error('"data" must be an instance.'); }
    this.data = data;
  }

  /**
   * Specifies a sample implementation for a service call.
   * @param dataAsync True to load data async, otherwise false.
   */
  loadData(dataAsync) {
    if (!this.data) { // cache data on client-side
        if (dataAsync) {
            // fetch( this.url, ... ).then( -> fire event, Promise, Observable, ... )
            return new Promise((resolve, reject) => {
              resolve(null);
            });
        } else {
            // fetch( { ... } ).then( -> fire event, Promise, Observable, ... )
            return this.data;
        }
    }
  }
}
