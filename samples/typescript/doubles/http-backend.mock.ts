import { HttpBackend } from '../services/index';

// better way to do this: use Jasmine [spyOn], TypeMoq or JsMockito
export class HttpBackendMock implements HttpBackend {
  private loadDataCallCount = 0;
  private data: any[] = [ ];
  public hasInMemoryData(): boolean {
    return true;
  }
  public enforceData(data: any[]): void {
    this.data = data;
  }
  public loadData(async: boolean): Promise<any[]>|any[] {
    expect(async).toBeFalsy();
    ++this.loadDataCallCount;
    return this.data;
  }
  public verify(data: any[]): void {
    expect(this.data).toEqual(data);
    expect(this.loadDataCallCount).toBe(1);
  }
}
