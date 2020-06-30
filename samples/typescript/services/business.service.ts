import { HttpBackend } from './http-backend';
import { HttpIpEndPoint } from './http-ip-end-point';

/**
 * Dynamic Bound Service, test-friendly
 */
export class BusinessService {
  constructor(private backend: HttpBackend) {
  }
  getData(settings?: any): Promise<any>|any[] {
    return this.backend.loadData(settings && settings.async);
  }
}

/**
 * Static Bound Service to HTTP IP Endpoint
 */
export class HttpBusinessService {
  private backend = new HttpIpEndPoint('localhost:3400'); // don't do that!
  constructor() {
  }
  getData(settings?: any): Promise<any>|any[] {
    return this.backend.loadData(settings && settings.async);
  }
}
