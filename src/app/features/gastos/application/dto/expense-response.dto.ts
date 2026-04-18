export interface ExpenseResponseDto {
  id: number;
  concept: string;
  category: string;
  amount: string; // ⚠ viene como string desde Laravel
  expense_date: string;
  provider: string;
  voucher: string | null;
}
