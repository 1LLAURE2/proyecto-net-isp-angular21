import { Observable } from "rxjs";
import { ClienteModel } from "./cliente.model";

export interface ClienteRepository {
  getAll(): Observable<ClienteModel[]>;
  getById(id: string): Observable<ClienteModel>;
  create(cliente: ClienteModel): Observable<void>;
  update(id: string, cliente: ClienteModel): Observable<void>;
}
