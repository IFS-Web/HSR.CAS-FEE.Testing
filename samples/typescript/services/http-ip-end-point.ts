import {HttpBackend} from './http-backend';

/**
 * IP End Point with $http reference.
 */
export class HttpIpEndPoint implements HttpBackend {
    private _data: any[];
    constructor(private _url: string) {
    }
    public hasInMemoryData(): boolean {
        return (typeof this._data !== 'undefined');
    }
    public enforceData(data: any[]): void {
        if (!data) { throw new Error('"data" must be an instance.'); }
        this._data = data;
    }
    /**
     * Specifies a sample implementation for a service call.
     * @param dataAsync True to load data async, otherwise false.
     */
    public loadData(dataAsync: boolean): Promise<any[]>|any[] {
        if (!this._data) { // cache data on client-side
            if (dataAsync) {
                // $.ajax( { url: this.url, ... } ).then( -> fire event, Promise, Observable, ... )
                return new Promise((resolve, reject) => {
                    resolve(null);
                });
            } else {
                // $.ajax( { ... } ).then( -> fire event, Promise, Observable, ... )
                return this._data;
            }
        }
    }
}
