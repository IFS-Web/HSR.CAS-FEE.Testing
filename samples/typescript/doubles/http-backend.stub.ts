import { HttpBackend } from '../services/index';

export class HttpBackendStub implements HttpBackend {
  public hasInMemoryData(): boolean { return true; }
  public enforceData(data: any[]): void { }
  public loadData(async): Promise|any[] { return [ 'a', 'b', 'c' ]; }
}
