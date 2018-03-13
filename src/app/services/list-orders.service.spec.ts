import { TestBed, inject } from '@angular/core/testing';

import { ListOrdersService } from './list-orders.service';

describe('ListOrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListOrdersService]
    });
  });

  it('should be created', inject([ListOrdersService], (service: ListOrdersService) => {
    expect(service).toBeTruthy();
  }));
});
