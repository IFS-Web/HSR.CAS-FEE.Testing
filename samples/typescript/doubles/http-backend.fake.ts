import { HttpBackend } from '../services/index';

export class HttpBackendFake implements HttpBackend {
  private data: any[]|undefined = void 0;
  constructor(private dataInput?: any[]) {
  }
  public hasInMemoryData(): boolean {
    return (typeof this.data !== 'undefined');
  }
  public enforceData(data: any[]): void {
    if (!data) { throw new Error('\'data\' must be an instance.'); }
    this.data = data;
  }
  public loadData(dataAsync: boolean): Promise<any[]>|any[] {
    if (typeof this.dataInput !== 'undefined') {
      this.data = this.dataInput;
    }
    if (dataAsync) {
      return new Promise((resolve, reject) => {
          resolve(this.data);
      });
    } else {
      return this.data || [ ];
    }
  }
}


