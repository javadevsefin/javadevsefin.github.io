import { take, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Servico } from './servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private readonly API = `${environment.API}/atendeFacil/api/servico`;

  constructor(private http: HttpClient) { }

  listServico(){
    return this.http.get<Servico[]>(`${this.API}`).pipe(
      take(1)
    );
  }

  loadById(id){
    return this.http.get(`${this.API}/${id}`).pipe(
      take(1)
    ); 
  }

  private create(servico){
    return this.http.post(`${this.API}`, servico).pipe(
      take(1)
    );
  }

  private update(servico){
    return this.http.put(`${this.API}/${servico.id}`, servico).pipe(
      take(1)
    );
  }

  save(servico){
    if(servico.id != null){
      return this.update(servico);
    } else {
      return this.create(servico);
    }
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`).pipe(
      take(1)
    );
  }
}
