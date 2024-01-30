import { TestBed } from '@angular/core/testing';

import { VatService } from './vat-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VatService', () => {
  let service: VatService;

  beforeEach(() => {
    TestBed.configureTestingModule({    imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
