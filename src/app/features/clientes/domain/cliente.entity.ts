export interface ClienteEntity {
  id: string;
  nombreCompleto(): string;
  estaActivo(): boolean;
}
