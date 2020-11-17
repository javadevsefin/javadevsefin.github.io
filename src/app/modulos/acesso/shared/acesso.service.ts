import { take } from 'rxjs/operators';
import { Role } from './role';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcessoService {

  private readonly API = `${environment.API}/atendeFacil/api/role`;

  constructor(private http: HttpClient) { }

  listRole(){
    return this.http.get<Role[]>(`${this.API}`).pipe(
      take(1)
    );
  }
}
