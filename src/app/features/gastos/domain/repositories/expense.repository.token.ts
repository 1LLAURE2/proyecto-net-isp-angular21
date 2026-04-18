import { InjectionToken } from '@angular/core';
import { ExpenseRepository } from './expense.repository';

export const EXPENSE_REPOSITORY = new InjectionToken<ExpenseRepository>(
  'ExpenseRepository'
);
