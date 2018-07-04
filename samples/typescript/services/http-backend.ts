/**
 * Interface for http backend (abstraction layer).
 */
export interface HttpBackend {
  hasInMemoryData(): boolean;
  enforceData(data: any[]): void;
  loadData(async: boolean): Promise<any[]>|any[];
}
