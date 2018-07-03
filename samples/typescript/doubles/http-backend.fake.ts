import { HttpBackend } from '../services/index';

export class HttpBackendFake implements HttpBackend {
  private _data:any[];
  constructor(private _dataInput?:any[]) {
  }
  public hasInMemoryData(): boolean {
    return (typeof this._data !== 'undefined');
  }
  public enforceData(data: any[]): void {
    if (!data) { throw new Error('\'data\' must be an instance.'); }
    this._data = data;
  }
  public loadData(dataAsync:boolean): Promise|any[] {
    if (typeof this._dataInput !== 'undefined') {
      this._data = this._dataInput;
    }
    if (dataAsync) {
      return new Promise((resolve, reject) => {
          resolve(this._data);
      });
    } else {
      return this._data;
    }
  }
}


