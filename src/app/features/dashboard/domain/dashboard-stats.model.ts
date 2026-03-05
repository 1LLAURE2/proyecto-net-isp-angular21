export interface DashboardStats {
  totalClientes: number;
  clientesActivos: number;
  clientesSuspendidos: number;

  ingresosMensuales: number;
  ingresosAnuales: number;

  ticketsAbiertos: number;
  ticketsCerrados: number;

  nodosActivos: number;
  nodosInactivos: number;
}
