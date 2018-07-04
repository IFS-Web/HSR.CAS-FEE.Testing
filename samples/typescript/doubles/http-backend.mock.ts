import { HttpBackend } from '../services/index';

// better way to do this: use Jasmine [spyOn], TypeMoq or JsMockito
export class HttpBackendMock implements HttpBackend {
  private _loadDataCallCount = 0;
  private _data: any[];
  public hasInMemoryData(): boolean {
    return true;
  }
  public enforceData(data: any[]): void {
    this._data = data;
  }
  public loadData(async): Promise<any[]>|any[] {
    expect(async).toBeFalsy();
    ++this._loadDataCallCount;
    return this._data;
  }
  public verify(data): void {
    expect(this._data).toEqual(data);
    expect(this._loadDataCallCount).toBe(1);
  }
}
