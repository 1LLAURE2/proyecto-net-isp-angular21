// infrastructure/mappers/cliente.mapper.ts
import { ClienteApiModel } from '../models/cliente-api.model';
import { ClienteModel } from '../../domain/cliente.model';

export class ClienteMapper {

  // API → DOMAIN
  static fromApi(cliente: ClienteApiModel): ClienteModel {
    return {
      id: cliente.id.toString(),
      nombre: cliente.name,
      email: cliente.email ?? '',
      telefono: cliente.phone,
      direccion: cliente.address,
      activo: cliente.status === 'activo',
      plan: cliente.plan?.name ?? '',
    };
  }

  // DOMAIN → API (para create/update)
  static toApi(cliente: ClienteModel): Partial<ClienteApiModel> {
    return {
      name: cliente.nombre,
      phone: cliente.telefono,
      address: cliente.direccion,
      status: cliente.activo ? 'activo' : 'inactivo',
      email: cliente.email,
    };
  }
}
