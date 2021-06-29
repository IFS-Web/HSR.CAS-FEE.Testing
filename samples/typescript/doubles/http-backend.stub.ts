import { HttpBackend } from '../services';

export class HttpBackendStub implements HttpBackend {
  public hasInMemoryData(): boolean { return true; }
  public enforceData(data: any[]): void { }
  public loadData(async: boolean): Promise<any[]>|any[] { return [ 'a', 'b', 'c' ]; }
}
