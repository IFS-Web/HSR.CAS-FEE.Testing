import { HttpBackend } from '../services';

export class HttpBackendFake implements HttpBackend {
  private data?: any[] = void 0;
  constructor(private dataInput?: any[]) {
  }
  public hasInMemoryData(): boolean {
    return (typeof this.data !== 'undefined');
  }
  public enforceData(data: any[]): void {
    if (!data) { throw new Error(`'data' must be an instance.`); }
    this.data = data;
  }
  public loadData(dataAsync: boolean): Promise<any[]>|any[] {
    if (typeof this.dataInput !== 'undefined') {
      this.data = this.dataInput;
    }
    if (this.data) {
      const data = this.data;
      return new Promise((resolve, reject) => {
          resolve(data);
      });
    } else {
      return this.data || [ ];
    }
  }
}


