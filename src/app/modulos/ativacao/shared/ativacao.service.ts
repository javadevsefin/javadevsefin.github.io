import { Fila } from './fila';
import { take, tap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtivacaoService {

  private readonly API = `${environment.API}/atendeFacil/api`;

  constructor(private http: HttpClient) { }

  senhaById(id){
    return this.http.get(`${this.API}/agendamento/senha/${id}`).pipe(
      take(1)
    );
  }

  listarFilaAtivados(unidade){
    return this.http.get<Fila[]>(`${this.API}/fila/ativados/${unidade}`).pipe(
      take(1)
    );
  }

  updateAgendamento(id){
    return this.http.get(`${this.API}/agendamento/agendamentoFila/${id}`).pipe(
      take(1)
    );
  }

  create(fila){
    return this.http.post(`${this.API}/fila`, fila).pipe(
      take(1)
    );
  }
}
