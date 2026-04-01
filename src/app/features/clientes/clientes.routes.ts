import { Routes } from "@angular/router";
import { GetClientesUseCase } from "./application/get-clientes.usecase";
import { CreateClienteUseCase } from "./application/create-cliente.usecase";
import { UpdateClienteUseCase } from "./application/update-cliente.usecase";
import { ClienteRepositoryImpl } from "./infrastructure/repositories/cliente-repository-impl";

export const CLIENTES_ROUTES: Routes = [
  {
    path:'',
    providers: [
      ClienteRepositoryImpl,
      GetClientesUseCase,
      CreateClienteUseCase,
      UpdateClienteUseCase
    ],
    loadComponent: ()=> import('./ui/pages/list-clientes/list-clientes').then(m=>m.ListClientes)
  },
  // {
  //   path: 'nuevo',
  //   loadComponent: () =>
  //     import('./ui/pages/create-cliente/create-cliente.component')
  //       .then(m => m.CreateClienteComponent)
  // }
];
