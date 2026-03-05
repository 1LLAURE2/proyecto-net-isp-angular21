import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GetClientesUseCase } from '../../../application/get-clientes.usecase';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-list-clientes',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-clientes.html',
  styleUrl: './list-clientes.css',
})
export class ListClientes {

  private getClientes = inject(GetClientesUseCase);

  clientes: any[] = [];

  isDarkMode: boolean = false;
  ngOnInit() {
    this.isDarkMode = document.documentElement.classList.contains('dark');
    this.getClientes.execute()
      .subscribe(data => this.clientes = data);
  }

  searchTerm = ''
  statusFilter = ''
  planFilter = ''

  currentPage = 1
  itemsPerPage = 5

  clients = [
    { name:'Juan Pérez', email:'juan@email.com', plan:'premium', status:'activo' },
    { name:'Ana Torres', email:'ana@email.com', plan:'basico', status:'pendiente' },
    { name:'Carlos López', email:'carlos@email.com', plan:'estandar', status:'inactivo' },
    { name:'Luis Martínez', email:'luis@email.com', plan:'premium', status:'activo' },
    { name:'María Gómez', email:'maria@email.com', plan:'basico', status:'activo' },
    { name:'Pedro Sánchez', email:'pedro@email.com', plan:'estandar', status:'pendiente' },
    { name:'Laura Díaz', email:'laura@email.com', plan:'premium', status:'activo' },
    { name:'Jorge Castillo', email:'jorge@email.com', plan:'basico', status:'inactivo' },
    { name:'Sofía Herrera', email:'sofia@email.com', plan:'estandar', status:'activo' },
    { name:'Miguel Navarro', email:'miguel@email.com', plan:'premium', status:'activo' },

    { name:'Daniel Rojas', email:'daniel@email.com', plan:'basico', status:'pendiente' },
    { name:'Paula Medina', email:'paula@email.com', plan:'estandar', status:'activo' },
    { name:'Ricardo Vega', email:'ricardo@email.com', plan:'premium', status:'inactivo' },
    { name:'Valeria Campos', email:'valeria@email.com', plan:'basico', status:'activo' },
    { name:'Hugo Flores', email:'hugo@email.com', plan:'estandar', status:'activo' },
    { name:'Natalia Romero', email:'natalia@email.com', plan:'premium', status:'pendiente' },
    { name:'Diego Salazar', email:'diego@email.com', plan:'basico', status:'activo' },
    { name:'Camila Ortega', email:'camila@email.com', plan:'estandar', status:'inactivo' },
    { name:'Fernando Cruz', email:'fernando@email.com', plan:'premium', status:'activo' },
    { name:'Gabriela Soto', email:'gabriela@email.com', plan:'basico', status:'activo' },

    { name:'Andrés Vargas', email:'andres@email.com', plan:'estandar', status:'pendiente' },
    { name:'Patricia Núñez', email:'patricia@email.com', plan:'premium', status:'activo' },
    { name:'Alejandro Pineda', email:'alejandro@email.com', plan:'basico', status:'inactivo' },
    { name:'Daniela Molina', email:'daniela@email.com', plan:'estandar', status:'activo' },
    { name:'Roberto Cabrera', email:'roberto@email.com', plan:'premium', status:'activo' },
    { name:'Lucía Bravo', email:'lucia@email.com', plan:'basico', status:'pendiente' },
    { name:'Esteban Fuentes', email:'esteban@email.com', plan:'estandar', status:'activo' },
    { name:'Verónica León', email:'veronica@email.com', plan:'premium', status:'activo' },
    { name:'Iván Carrasco', email:'ivan@email.com', plan:'basico', status:'inactivo' },
    { name:'Rosa Delgado', email:'rosa@email.com', plan:'estandar', status:'activo' },

    { name:'Tomás Mendoza', email:'tomas@email.com', plan:'premium', status:'activo' },
    { name:'Claudia Peña', email:'claudia@email.com', plan:'basico', status:'activo' },
    { name:'Manuel Aguilar', email:'manuel@email.com', plan:'estandar', status:'pendiente' },
    { name:'Elena Serrano', email:'elena@email.com', plan:'premium', status:'activo' },
    { name:'Oscar Zamora', email:'oscar@email.com', plan:'basico', status:'inactivo' },
    { name:'Adriana Cortés', email:'adriana@email.com', plan:'estandar', status:'activo' },
    { name:'Raúl Espinoza', email:'raul@email.com', plan:'premium', status:'activo' },
    { name:'Patricio Valdez', email:'patricio@email.com', plan:'basico', status:'pendiente' },
    { name:'Beatriz Lara', email:'beatriz@email.com', plan:'estandar', status:'activo' },
    { name:'Guillermo Silva', email:'guillermo@email.com', plan:'premium', status:'activo' },

    { name:'Carolina Ibáñez', email:'carolina@email.com', plan:'basico', status:'activo' },
    { name:'Sebastián Pardo', email:'sebastian@email.com', plan:'estandar', status:'inactivo' },
    { name:'Mónica Figueroa', email:'monica@email.com', plan:'premium', status:'activo' },
    { name:'Eduardo Solís', email:'eduardo@email.com', plan:'basico', status:'activo' },
    { name:'Julieta Acosta', email:'julieta@email.com', plan:'estandar', status:'pendiente' },
    { name:'Cristian Araya', email:'cristian@email.com', plan:'premium', status:'activo' },
    { name:'Teresa Villalba', email:'teresa@email.com', plan:'basico', status:'activo' },
    { name:'Pablo Santamaría', email:'pablo@email.com', plan:'estandar', status:'activo' },
    { name:'Lorena Cordero', email:'lorena@email.com', plan:'premium', status:'pendiente' },
    { name:'Mario Bustos', email:'mario@email.com', plan:'basico', status:'activo' }
  ];

  filteredClients() {

    return this.clients.filter(client => {

      const matchesSearch =
        client.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(this.searchTerm.toLowerCase())

      const matchesStatus =
        this.statusFilter ? client.status === this.statusFilter : true

      const matchesPlan =
        this.planFilter ? client.plan === this.planFilter : true

      return matchesSearch && matchesStatus && matchesPlan

    })

  }

  resetFilters() {
    this.searchTerm = ''
    this.statusFilter = ''
    this.planFilter = ''
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
    // if (page < 1 || page > this.totalPages()) return
    // this.currentPage = page
    if (page === '...') return;
    const pageNumber = Number(page);
    if (pageNumber < 1 || pageNumber > this.totalPages()) return;
    this.currentPage = pageNumber;
  }


  getVisiblePages(): (number | string)[] {

    const total = this.totalPages();
    const current = this.currentPage;

    const pages: (number | string)[] = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (current > 4) {
      pages.push('...');
    }

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (current < total - 3) {
      pages.push('...');
    }

    pages.push(total);

    return pages;
  }

}
