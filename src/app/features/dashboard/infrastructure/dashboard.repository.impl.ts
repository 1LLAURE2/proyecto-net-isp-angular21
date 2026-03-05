import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { DashboardRepository } from '../domain/dashboard.repository';
import { DashboardStats } from '../domain/dashboard-stats.model';
import { DashboardApiService } from './dashboard-api.service';

@Injectable()
export class DashboardRepositoryImpl extends DashboardRepository {

  constructor(private api: DashboardApiService) {
    super();
  }

  getStats(): Observable<DashboardStats> {
    console.log("getStats");
    return this.api.getStats().pipe(
      catchError(error => {
        console.error('Error obteniendo estadísticas', error);
        throw error;
      })
    );
  }

}
