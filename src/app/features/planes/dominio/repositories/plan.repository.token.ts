import { InjectionToken } from '@angular/core';
import { PlanRepository } from './plan.repository';

export const PLAN_REPOSITORY = new InjectionToken<PlanRepository>('PlanRepository');
