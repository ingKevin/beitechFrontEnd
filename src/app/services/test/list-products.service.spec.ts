import { TestBed, inject } from '@angular/core/testing';

import { ListProductsService } from '../list-products.service';

describe('ListProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListProductsService]
    });
  });

  it('should be created', inject([ListProductsService], (service: ListProductsService) => {
    expect(service).toBeTruthy();
  }));
});
