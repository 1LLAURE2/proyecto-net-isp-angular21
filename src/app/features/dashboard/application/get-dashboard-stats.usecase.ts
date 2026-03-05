import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardStats } from '../domain/dashboard-stats.model';
import { DashboardRepository } from '../domain/dashboard.repository';


@Injectable()
export class GetDashboardStatsUseCase {

  private repository = inject(DashboardRepository);

  execute(): Observable<DashboardStats> {
    return this.repository.getStats();
  }

}
