import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//se usa para solicitud HTTP
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url ='http://localhost:8080/api/clientes/consultar';

  /* Metodo realizar solicitud GET para buscar Cliente con parametros
   tipo de documento y numero de documento*/
  constructor(private http: HttpClient) {}
  buscarCliente(tipoDocumento:string,numeroDocumento:string):Observable<any>{
    return this.http.get(`${this.url}?tipoDocumento=${tipoDocumento}&numeroDocumento=${numeroDocumento}`);
  }
}
