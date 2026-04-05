import { Injectable } from '@angular/core';
import { PaymentApiService } from '../../infrastructure/api/payment.api.service';

@Injectable({
  providedIn: 'root',
})
export class GetVoucherUsecase {
  constructor(private api: PaymentApiService) {}

  execute(id: number) {
    return this.api.getVoucher(id);
  }
}
