import { TestBed } from '@angular/core/testing';

import { OrderDetails } from './order-details-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderDetails', () => {
  let service: OrderDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({    imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OrderDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
