export interface HttpBackend {
  hasInMemoryData(): boolean;
  enforceData(data : any[]): void;
  loadData(async:boolean) : Promise|any[];
}
