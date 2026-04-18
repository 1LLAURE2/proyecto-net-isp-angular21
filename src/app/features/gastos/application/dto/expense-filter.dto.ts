export interface ExpenseFilterDto {
  search?: string;
  concept?: string;
  provider?: string;
  category?: string;

  min_amount?: number;
  max_amount?: number;

  date_from?: string; // YYYY-MM-DD
  date_to?: string;

  sort?: string; // "amount" | "-amount"
  page?: number;
  per_page?: number;
}
