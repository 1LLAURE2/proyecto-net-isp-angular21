import { Observable } from 'rxjs';
import { Plan } from '../models/plan.model';
import { SelectOption } from '../../../../shared/models/SelectOption';

export abstract class PlanRepository {
  abstract getPlans(): Observable<Plan[]>;
  abstract getPlansSelect(): Observable<SelectOption[]>;
}
