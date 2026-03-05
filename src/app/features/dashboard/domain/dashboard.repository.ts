import { Observable } from 'rxjs';
import { DashboardStats } from './dashboard-stats.model';

export abstract class DashboardRepository {
  abstract getStats(): Observable<DashboardStats>;
}
