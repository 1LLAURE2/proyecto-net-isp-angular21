import { TestBed } from '@angular/core/testing';

import { GetVoucherUsecase } from './get-voucher.usecase';

describe('GetVoucherUsecase', () => {
  let service: GetVoucherUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVoucherUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
