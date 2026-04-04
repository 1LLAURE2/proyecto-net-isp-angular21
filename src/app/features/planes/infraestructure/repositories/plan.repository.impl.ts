import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { SelectOption } from '../../../../shared/models/SelectOption';
import { Plan } from '../../dominio/models/plan.model';
import { PlanRepository } from '../../dominio/repositories/plan.repository';
import { ApiResponse } from '../../../../shared/models/api-response.model';
import { PlanDto } from '../DTO/plan.dto';


@Injectable({ providedIn: 'root' })
export class PlanRepositoryImpl implements PlanRepository {

  private api = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getPlans(): Observable<Plan[]> {
    return this.http
    .get<ApiResponse<PlanDto[]>>(`${this.api}/plans`)
    .pipe(
      map(res => {
        console.log('API RESPONSE 👉', res); // 👈 CLAVE
        return (res.data ?? []).map((item) => ({
          id: item.id,
          name: item.name,
          price: Number(item.price),
          speed: item.speed
        }));
      })
    );
  }

  getPlansSelect(): Observable<SelectOption[]> {
    return this.http
    .get<ApiResponse<SelectOption[]>>(`${this.api}/select/plans`)
    .pipe(
      map(res => res.data??[])
    );
  }
}
