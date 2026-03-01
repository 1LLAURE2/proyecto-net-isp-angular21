import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-clientes',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './list-clientes.html',
  styleUrl: './list-clientes.css',
})
export class ListClientes {
  clientes=[
    {
      'nombre': "dsd",
      'email':"sa"
    }
  ];
}
