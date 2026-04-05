export interface Payment {
  id: number;
  transaction: string;
  amount: string;
  method: string;
  payment_date: string;
  voucher_url: string;
  client: {
    id: number;
    name: string;
  };

  invoice: {
    id: number;
    number: string;
    amount: string;
    status: string;
  };
}
