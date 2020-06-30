import {HttpBackend} from './http-backend';

/**
 * IP End Point with $http reference.
 */
export class HttpIpEndPoint implements HttpBackend {
    private data: any[]|undefined = void 0;
    constructor(private url: string) {
    }
    public hasInMemoryData(): boolean {
        return (typeof this.data !== 'undefined');
    }
    public enforceData(data: any[]): void {
        if (!data) { throw new Error('"data" must be an instance.'); }
        this.data = data;
    }
    /**
     * Specifies a sample implementation for a service call.
     * @param dataAsync True to load data async, otherwise false.
     */
    public loadData(dataAsync: boolean): Promise<any[]>|any[] {
        if (!this.data) { // cache data on client-side
            if (dataAsync) {
                // $.ajax( { url: this.url, ... } ).then( -> fire event, Promise, Observable, ... )
                return new Promise((resolve, reject) => {
                    resolve(this.data || [ ]);
                });
            } else {
                // $.ajax( { ... } ).then( -> fire event, Promise, Observable, ... )
            }
        }
        return this.data || [ ];
    }
}
