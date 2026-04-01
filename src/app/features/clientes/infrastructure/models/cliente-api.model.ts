// infrastructure/models/cliente-api.model.ts
export interface ClienteApiModel {
  id: number;
  name: string;
  phone: string;
  address: string;
  status: string;
  email?: string;
  created_at: string;
  plan?: {
    id: number;
    name: string;
    price: string;
  };
}
