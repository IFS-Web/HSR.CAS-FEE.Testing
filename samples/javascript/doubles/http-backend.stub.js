import { HttpBackend } from '../services';

export class HttpBackendStub extends HttpBackend {
    hasInMemoryData() { return true; }
    enforceData(data){ }
    loadData(async) { return [ 'a', 'b', 'c' ]; }
}
