import { inject, Injectable } from '@angular/core';
import { PlanRepository } from '../../dominio/repositories/plan.repository';



@Injectable({ providedIn: 'root' })
export class GetPlansUseCase {

  private repo = inject(PlanRepository);

  execute() {
    return this.repo.getPlans();
  }
}
