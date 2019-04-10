import { TestBed } from '@angular/core/testing';

import { STransactionsService } from './s-transactions.service';

describe('STransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: STransactionsService = TestBed.get(STransactionsService);
    expect(service).toBeTruthy();
  });
});
