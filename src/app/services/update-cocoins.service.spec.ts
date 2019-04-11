import { TestBed } from '@angular/core/testing';

import { UpdateCocoinsService } from './update-cocoins.service';

describe('UpdateCocoinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateCocoinsService = TestBed.get(UpdateCocoinsService);
    expect(service).toBeTruthy();
  });
});
