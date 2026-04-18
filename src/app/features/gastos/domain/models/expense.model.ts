export interface Expense {
  id: number;
  concept: string;
  category: string;
  amount: number;
  expenseDate: Date;
  provider: string;
  voucher: string | null;
}
