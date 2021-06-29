import { HttpBackend } from '../services';

export class HttpBackendSpy implements HttpBackend {
  constructor(private onLoadData : () => any[]) {
  }
  public hasInMemoryData(): boolean {
    return true;
  }
  public enforceData(data: any[]): void {
  }
  public loadData(async: boolean): Promise<any[]>|any[] {
    return this.onLoadData();
  }
}
