import {HttpIpEndPoint} from "./http-ip-end-point";

/**
 * Dynamic Bound Service, test-friendly
 */
export class BusinessService {
  constructor(backend) {
    this.backend = backend;
  }
  getData(settings) {
    return this.backend.loadData(settings && settings.async);
  }
}

/**
 * Static Bound Service
 */
export class HttpBusinessService {
  constructor() {
  }
  get backend() {
    return new HttpIpEndPoint('localhost:3400'); // don't do that!
  }
  getData(settings) {
    return this.backend.loadData(settings && settings.async);
  }
}
