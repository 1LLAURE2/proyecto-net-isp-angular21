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

  // createPayment(data: PaymentCreateDto, file?: File) {
  //   const formData = new FormData();

  //   formData.append('client_id', data.client_id.toString());
  //   formData.append('invoice_id', data.invoice_id.toString());
  //   formData.append('amount', data.amount.toString());
  //   formData.append('method', data.method);
  //   formData.append('payment_date', data.payment_date);

  //   if (file) {
  //     formData.append('voucher', file);
  //   }

  //   return this.http.post<{ message: string; data: any }>(`${this.baseUrl}`, formData);
  // }
}
