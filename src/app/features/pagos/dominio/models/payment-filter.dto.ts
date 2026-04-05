export interface PaymentFilterDTO {
  client_id?: number;
  invoice_id?: number;
  method?: string;

  date_from?: string;
  date_to?: string;

  month?: number;
  year?: number;

  search?: string;

  sort_by?: string;
  sort_dir?: 'asc' | 'desc';

  per_page?: number;
  page?: number;
}
