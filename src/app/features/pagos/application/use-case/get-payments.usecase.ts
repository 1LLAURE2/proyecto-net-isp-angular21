import { Injectable } from '@angular/core';
import { PaymentApiService } from '../../infrastructure/api/payment.api.service';
import { PaymentFilterDTO } from '../../dominio/models/payment-filter.dto';

@Injectable({
  providedIn: 'root',
})
export class GetPaymentsUsecase {
  constructor(private api: PaymentApiService) {}

  execute(filters: PaymentFilterDTO) {
    return this.api.getPayments(filters);
  }
}
