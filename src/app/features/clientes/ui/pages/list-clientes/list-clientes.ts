import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GetClientesUseCase } from '../../../application/get-clientes.usecase';

@Component({
  standalone: true,
  selector: 'app-list-clientes',
  imports: [CommonModule],
  templateUrl: './list-clientes.html',
  styleUrl: './list-clientes.css',
})
export class ListClientes {

  private getClientes = inject(GetClientesUseCase);

  clientes: any[] = [];

  ngOnInit() {
    this.getClientes.execute()
      .subscribe(data => this.clientes = data);
  }
}
