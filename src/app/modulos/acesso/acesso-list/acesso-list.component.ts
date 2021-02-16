import { GlobalService } from './../../shared/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AcessoService } from './../shared/acesso.service';
import { Acesso } from './../shared/acesso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso-list',
  templateUrl: './acesso-list.component.html',
  styleUrls: ['./acesso-list.component.css'],
  preserveWhitespaces: true
})
export class AcessoListComponent implements OnInit {

  acessos: Acesso[];
  _id: string;
  _descricao: string;

  constructor(private acessoService: AcessoService,
              private router: Router,
              private route: ActivatedRoute,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.listarAcesso();
  }

  listarAcesso(){
    this.acessoService.listAcesso().subscribe(
        dados => this.acessos = dados
    );
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  pegarDados(id, descricao){
      this._id = id;
      this._descricao = descricao
  }

}
