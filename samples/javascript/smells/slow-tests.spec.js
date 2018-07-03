import { HttpIpEndPoint, BusinessService } from '../services/index';

describe('A BusinessService', function() {
  let sut;

  beforeEach(() => {
    sut = new BusinessService(new HttpIpEndPoint('localhost:3400'))
  });

  it('should return all elements stored in the underlying data source.', function() {
    const dataFromService = sut.getData({ async: false });
    expect(dataFromService).not.toBeNull();
  });
});


