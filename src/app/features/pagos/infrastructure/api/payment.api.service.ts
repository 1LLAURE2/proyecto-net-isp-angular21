import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentFilterDTO } from '../../dominio/models/payment-filter.dto';
import { Payment } from '../../dominio/models/payment.model';
import { ApiResponse } from '../../../../shared/models/api-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentApiService {
  private baseUrl = 'http://localhost:8000/api/payments';

  constructor(private http: HttpClient) {}

  getPayments(filters: PaymentFilterDTO): Observable<ApiResponse<Payment[]>> {
    let params = new HttpParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        params = params.set(key, value);
      }
    });

    return this.http.get<ApiResponse<Payment[]>>(this.baseUrl, { params });
  }

  getVoucher(id: number) {
    return this.http.get(`${this.baseUrl}/${id}/voucher`, {
      responseType: 'blob'
    });
  }
}
