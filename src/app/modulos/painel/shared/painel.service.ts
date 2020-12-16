import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Painel } from './painel';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PainelService {

  private readonly API = `${environment.API}/atendeFacil/api/painel`;

  constructor(private http: HttpClient) { }

  findByPainelA(){
    return this.http.get<Painel[]>(`${this.API}/01`).pipe(
      take(1)
    );
  }

  findByChamada(){
    return this.http.get(`${this.API}/01/chamada`).pipe(
      take(1)
    );
  }
}
