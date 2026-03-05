import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GetClientesUseCase } from '../../../application/get-clientes.usecase';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-list-clientes',
  imports: [CommonModule,FormsModule],
  templateUrl: './list-clientes.html',
  styleUrl: './list-clientes.css',
})
export class ListClientes {

  private getClientes = inject(GetClientesUseCase);

  clientes: any[] = [];

  ngOnInit() {
    console.log("ngOnInit clientes");
    this.getClientes.execute()
      .subscribe(data => this.clientes = data);
  }

  searchTerm = ''
  statusFilter = ''
  planFilter = ''

  clients = [
    {
      name: 'Juan Pérez',
      email: 'juan@email.com',
      plan: 'premium',
      status: 'activo'
    },
    {
      name: 'Ana Torres',
      email: 'ana@email.com',
      plan: 'basico',
      status: 'pendiente'
    },
    {
      name: 'Carlos López',
      email: 'carlos@email.com',
      plan: 'estandar',
      status: 'inactivo'
    }
  ]

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
}
