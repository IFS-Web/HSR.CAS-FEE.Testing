import { HttpBackend } from '../services/index';

export class HttpBackendSpy implements HttpBackend {
  constructor(private _onLoadData : () => any[]) {
  }
  public hasInMemoryData(): boolean {
    return true;
  }
  public enforceData(data: any[]): void {
  }
  public loadData(async): Promise<any[]>|any[] {
    return this._onLoadData();
  }
}
