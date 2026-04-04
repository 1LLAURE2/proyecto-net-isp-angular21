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
  pageSizeOptions = [5, 10, 50];   // opciones del select

  isDarkMode: boolean = false;

  ngOnInit() {
    this.isDarkMode = document.documentElement.classList.contains('dark');

    forkJoin([
      this.getClientes.execute(),
      this.getPlansSelect.execute()
    ]).subscribe(([clientesData, planesData]) => {
      this.clientes = clientesData;
      this.planes = planesData;

      this.updateClients();
      this.cdr.detectChanges();

      console.log('Planes:', this.planes);
      console.log('Clientes:', this.clientes);
    });
  }


  filteredClients(): ClienteModel[] {

    return this.clientes.filter(client => {

      const matchesSearch =
        client.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(this.searchTerm.toLowerCase())

      const matchesStatus =
        this.statusFilter
        ? (this.statusFilter === 'activo' && client.activo) ||
          (this.statusFilter === 'inactivo' && !client.activo)
        : true

        console.log("Client PLAN"+client.plan.toString());
        console.log("Client PLANFILTER"+this.planFilter);

      const matchesPlan =
        this.planFilter ? client.plan.toString() === this.planFilter.toString() : true

      return matchesSearch && matchesStatus && matchesPlan

    })

  }

  updateClients(): void {
    // const filtered: ClienteModel[] = this.filteredClients();
    this.filteredClientsList = this.filteredClients();

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.paginatedClientsList = this.filteredClientsList.slice(start, end);

    // Actualizar el total de páginas
    this.totalPagesCount = Math.ceil(this.filteredClientsList.length / this.itemsPerPage);
  }

  resetFilters() {
    this.searchTerm = '';
    this.statusFilter = '';
    this.planFilter = '';
    this.currentPage=1;
    this.updateClients();
  }

  addClient() {
    console.log('Abrir formulario de nuevo cliente')
  }

  paginatedClients() {

    const start = (this.currentPage - 1) * this.itemsPerPage
    const end = start + this.itemsPerPage

    return this.filteredClients().slice(start, end)

  }

  totalPages() {
    return Math.ceil(this.filteredClients().length / this.itemsPerPage)
  }

  changePage(page: number | string ) {
    if (page === '...') return;

    const pageNumber = Number(page);
    if (pageNumber < 1 || pageNumber > this.totalPages()) return;

    this.currentPage = pageNumber;
    this.updateClients();
  }

  onPageSizeChange(newSize: number) {
    this.itemsPerPage = newSize;
    this.currentPage = 1; // resetear a la primera página al cambiar tamaño
    this.updateClients();
  }

}
