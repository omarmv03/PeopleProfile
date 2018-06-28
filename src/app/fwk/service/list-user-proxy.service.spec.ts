import { TestBed, inject } from '@angular/core/testing';

import { ListUserProxyService } from './list-user-proxy.service';

describe('ListUserProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListUserProxyService]
    });
  });

  it('should be created', inject([ListUserProxyService], (service: ListUserProxyService) => {
    expect(service).toBeTruthy();
  }));
});
