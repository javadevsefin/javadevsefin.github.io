import { take } from 'rxjs/operators';
import { DetalhamentoServico } from './detalhamento-servico';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalhamentoServicoService {

  private readonly API = `${environment.API}/atendeFacil/api/detalhamentoservico`;

  constructor(private http: HttpClient) { }

  listDetalhamentoServico(){
    return this.http.get<DetalhamentoServico[]>(`${this.API}`).pipe(
      take(1)
    );
  }

  loadById(id){
    return this.http.get(`${this.API}/${id}`).pipe(
       take(1)
    );
  }

  private create(detServico){
    return this.http.post(`${this.API}`, detServico).pipe(
        take(1)
    );
  }

  private update(detServico){
    return this.http.put(`${this.API}/${detServico.id}`, detServico).pipe(
      take(1)
    );
  }

  save(detServico){
      if(detServico){
          return this.create(detServico);
      } else {
          return this.update(detServico);
      }
  }
}
