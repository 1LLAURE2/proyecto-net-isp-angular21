import { TestBed } from '@angular/core/testing';

import { GetPaymentsUsecase } from './get-payments.usecase';

describe('GetPaymentsUsecase', () => {
  let service: GetPaymentsUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPaymentsUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
