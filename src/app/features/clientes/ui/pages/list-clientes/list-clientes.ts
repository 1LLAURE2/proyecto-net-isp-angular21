import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { GetClientesUseCase } from '../../../application/get-clientes.usecase';
import { FormsModule } from '@angular/forms';
import { CustomPaginacion } from '../../../../../shared/components/custom-paginacion/custom-paginacion';
import { CustomButton } from '../../../../../shared/components/custom-button/custom-button';
import { CustomSeleccionItemsPorPagina } from '../../../../../shared/components/custom-seleccion-items-por-pagina/custom-seleccion-items-por-pagina';
import { CustomBadge } from '../../../../../shared/components/custom-badge/custom-badge';
import { GetPlansSelectUseCase } from '../../../../planes/application/use-cases/get-plans-select.usecase';
import { SelectOption } from '../../../../../shared/models/SelectOption';
import { PlanRepository } from '../../../../planes/dominio/repositories/plan.repository';
import { PlanRepositoryImpl } from '../../../../planes/infraestructure/repositories/plan.repository.impl';
import { CustomSelect } from '../../../../../shared/components/custom-select/custom-select';
import { forkJoin } from 'rxjs';
import { ClientesMobile } from "../../components/clientes-mobile/clientes-mobile";
import { ClientesDesktop } from "../../components/clientes-desktop/clientes-desktop";
import { ClienteModel } from '../../../domain/cliente.model';
// import { SelectOption } from '../../../../../shared/models/SelectOption';
// import { GetPlansSelectUseCase } from '../../../../planes/application/use-cases/get-plans-select.usecase';
// import { CustomSelect } from '../../../../../shared/components/custom-select/custom-select';
// import { ListPlanes } from '../../../../planes/UI/list-planes/list-planes';

@Component({
  standalone: true,
  selector: 'app-list-clientes',
  imports: [CommonModule, FormsModule, CustomButton, CustomSeleccionItemsPorPagina, CustomSelect, ClientesMobile, ClientesDesktop],
  templateUrl: './list-clientes.html',
  styleUrl: './list-clientes.css',
  providers: [
    { provide: PlanRepository, useClass: PlanRepositoryImpl }, // <-- clave
    GetPlansSelectUseCase
  ],
})
export class ListClientes {

  private cdr = inject(ChangeDetectorRef);
  private getClientes = inject(GetClientesUseCase);
  private getPlansSelect = inject(GetPlansSelectUseCase);

  planes: SelectOption[] = [];


  clientes: ClienteModel[] = [];
  paginatedClientsList: ClienteModel[] = [];
  filteredClientsList: ClienteModel[] = [];


  searchTerm = ''
  statusFilter = ''
  planFilter: number | string | null = null;

  currentPage = 1
  itemsPerPage = 5
  totalPagesCount: number = 1;
  pageSizeOptions = [2,5, 10, 50];   // opciones del select

  isDarkMode: boolean = false;

  ngOnInit() {
    this.isDarkMode = document.documentElement.classList.contains('dark');

    forkJoin([
      this.getClientes.execute(),
      this.getPlansSelect.execute()
    ]).subscribe(([clientesData, planesData]) => {
      this.clientes = clientesData.items;
      this.paginatedClientsList = clientesData.items; // si quieres paginación del backend
      this.totalPagesCount = clientesData.total_pages;

      this.planes = planesData;

      this.cdr.detectChanges();

      console.log('Planes:', this.planes);
      console.log('Clientes:', this.clientes);
    });
  }

  // 🔹 Cargar clientes usando query params
  loadClients() {
    const params = {
      search: this.searchTerm || undefined,
      status: this.statusFilter || undefined,
      plan_id: this.planFilter || undefined,
      per_page: this.itemsPerPage,
      page: this.currentPage,
      sort: 'name',
      direction: 'asc' as 'asc' | 'desc'
    };

    this.getClientes.execute(params).subscribe(data => {
      this.clientes = data.items;         // array de clientes
      this.paginatedClientsList = data.items; // ya viene paginado del backend
      this.totalPagesCount = data.total_pages;
      this.cdr.detectChanges();
    });

    console.log(this.clientes);
  }

  resetFilters() {
    this.searchTerm = '';
    this.statusFilter = '';
    this.planFilter = '';
    this.currentPage=1;
    this.loadClients();
  }

  addClient() {
    console.log('Abrir formulario de nuevo cliente')
  }

  changePage(page: number | string ) {
    if (page === '...') return;

    const pageNumber = Number(page);
    if (pageNumber < 1 || pageNumber > this.totalPagesCount) return;

    this.currentPage = pageNumber;
    this.loadClients();
  }

  onPageSizeChange(newSize: number) {
    this.itemsPerPage = newSize;
    this.currentPage = 1; // resetear a la primera página al cambiar tamaño
    this.loadClients();
  }

}
