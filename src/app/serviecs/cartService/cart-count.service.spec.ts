import { TestBed } from '@angular/core/testing';

import { CartCountService } from './cart.service';

describe('CartCountService', () => {
  let service: CartCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
